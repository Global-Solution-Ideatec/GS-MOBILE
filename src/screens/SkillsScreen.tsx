import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SkillBar, Card } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const SkillsScreen: React.FC = () => {
  const { habilidades } = useContext(UserDataContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      <Card>
        {habilidades.map((skill) => (
          <SkillBar key={skill.nome} name={skill.nome} level={skill.nivel} />
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#F6F6F8', flexGrow: 1 },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 14, textAlign: 'center' },
});
