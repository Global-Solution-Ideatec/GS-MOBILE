import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from '../components';
import { UserDataContext } from '../contexts/UserDataContext';

export const TasksScreen: React.FC = () => {
  const { tarefas } = useContext(UserDataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.taskTitle}>{item.titulo}</Text>
            <Text style={styles.taskInfo}>Descrição: {item.descricao}</Text>
            <Text style={styles.taskInfo}>Status: {item.status}</Text>
            <Text style={styles.taskInfo}>Prioridade: {item.prioridade}</Text>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma tarefa encontrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F6F6F8' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 12, textAlign: 'center' },
  taskTitle: { fontSize: 17, fontWeight: '600', marginBottom: 6, color: '#111' },
  taskInfo: { fontSize: 15, color: '#444', marginBottom: 2 },
});
