import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FeedbackCardProps {
  author: string;
  feedback: string;
  date: string;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ author, feedback, date }) => (
  <View style={styles.card}>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.feedback}>{feedback}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 14,
    marginVertical: 8,
    elevation: 2,
  },
  author: { fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom: 4 },
  feedback: { fontSize: 15, color: '#444', marginBottom: 6 },
  date: { fontSize: 12, color: '#888', alignSelf: 'flex-end' },
});
