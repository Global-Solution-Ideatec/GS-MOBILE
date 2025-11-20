import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillBarProps {
  name: string;
  level: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.barBackground}>
      <View style={[styles.barFill, { width: `${level}%` }]} />
    </View>
    <Text style={styles.level}>{level}%</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 6 },
  name: { fontWeight: '600', fontSize: 15, color: '#333' },
  barBackground: {
    height: 8, backgroundColor: '#ccc', borderRadius: 4,
    width: '100%', marginTop: 4,
  },
  barFill: {
    height: 8, borderRadius: 4, backgroundColor: '#888',
  },
  level: { marginTop: 2, fontSize: 13, color: '#555' },
});
