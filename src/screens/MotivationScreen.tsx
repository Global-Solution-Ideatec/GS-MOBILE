import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MotivationalPhrase, Button } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const MotivationScreen: React.FC = () => {
  const { frasesMotivacionais } = useContext(UserDataContext);
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % frasesMotivacionais.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + frasesMotivacionais.length) % frasesMotivacionais.length);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspiração do Dia</Text>
      <MotivationalPhrase phrase={frasesMotivacionais[index]} />
      <View style={styles.row}>
        <Button text="Anterior" onPress={handlePrev} />
        <Button text="Próxima" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: '#F6F6F8', justifyContent: 'center' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 9, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
});
