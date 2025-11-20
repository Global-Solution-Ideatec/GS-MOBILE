import React, { useContext } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const AboutScreen: React.FC = () => {
  const { descricaoSobre } = useContext(UserDataContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre o IdeiaTech</Text>
      <Card>
        <View>
          {descricaoSobre.split('\n').map((par, idx) => (
            <Text key={idx} style={styles.paragraph}>{par}</Text>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#F6F6F8', flex: 1 },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 14, textAlign: 'center' },
  paragraph: { color: '#444', fontSize: 15, lineHeight: 22, marginBottom: 10 },
});
