import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const DashboardScreen: React.FC = () => {
  const { emojisHumor, labelsHumor, niveisEnergia, niveisFoco } = useContext(UserDataContext);
  const [humor, setHumor] = useState<number | null>(null);
  const [energia, setEnergia] = useState<number | null>(null);
  const [foco, setFoco] = useState<number | null>(null);
  const [registro, setRegistro] = useState<string | null>(null);

  const handleRegistrar = () => {
    setRegistro(`Humor: ${labelsHumor[humor ?? 2]}, Energia: ${niveisEnergia[energia ?? 2]}, Foco: ${niveisFoco[foco ?? 2]}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>
      <Card>
        <Text style={styles.label}>Humor:</Text>
        <View style={styles.optionsRow}>
          {emojisHumor.map((emoji, idx) => (
            <Button key={emoji}
              text={emoji}
              onPress={() => setHumor(idx)}
              style={humor === idx ? styles.selected : {}}
            />
          ))}
        </View>
        <Text style={styles.label}>Energia:</Text>
        <View style={styles.optionsRow}>
          {niveisEnergia.map((en, idx) => (
            <Button key={en}
              text={en}
              onPress={() => setEnergia(idx)}
              style={energia === idx ? styles.selected : {}}
            />
          ))}
        </View>
        <Text style={styles.label}>Foco:</Text>
        <View style={styles.optionsRow}>
          {niveisFoco.map((fo, idx) => (
            <Button key={fo}
              text={fo}
              onPress={() => setFoco(idx)}
              style={foco === idx ? styles.selected : {}}
            />
          ))}
        </View>
        <Button text="Registrar meu bem-estar" onPress={handleRegistrar} />
        {registro && <Text style={styles.registro}>{registro}</Text>}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#F6F6F8' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 15, textAlign: 'center' },
  label: { fontWeight: '600', color: '#555', marginTop: 18 },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 4 },
  selected: { backgroundColor: '#888', color: '#FFF' },
  registro: { marginTop: 12, color: '#2ecc71', fontSize: 15, textAlign: 'center' },
});
