import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { FeedbackCard, Button, Card } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const FeedbackScreen: React.FC = () => {
  const { feedbacks, addFeedback } = useContext(UserDataContext);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      addFeedback({
        author: 'Você',
        feedback: input,
        date: new Date().toLocaleDateString(),
      });
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed de Feedbacks</Text>
      <Card style={{ marginBottom: 16 }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Deixe um elogio, sugestão ou recado!"
          style={styles.input}
        />
        <Button text="Enviar" onPress={handleSend} disabled={!input.trim()} />
      </Card>
      <FlatList
        data={feedbacks}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <FeedbackCard author={item.author} feedback={item.feedback} date={item.date} />
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 12 }}>Ainda não há feedbacks.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F6F6F8' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  input: {
    minHeight: 42, borderWidth: 1, borderColor: '#CCC', borderRadius: 8,
    marginBottom: 8, padding: 8, backgroundColor: '#FFF', fontSize: 15
  },
});
