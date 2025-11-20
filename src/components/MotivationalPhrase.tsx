import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MotivationalPhraseProps {
  phrase: string;
}

export const MotivationalPhrase: React.FC<MotivationalPhraseProps> = ({ phrase }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{phrase}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 16,
    marginVertical: 12,
    alignItems: 'center',
  },
  text: { fontSize: 17, color: '#333', textAlign: 'center', fontStyle: 'italic' },
});
