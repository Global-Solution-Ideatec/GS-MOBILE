import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Card, Button } from '../components';
import { RecommendationContext } from '../contexts/RecommendationContext';

export const RecommendationsScreen: React.FC = () => {
  const { recomendacoes, loading, error, fetchRecomendacoes } = useContext(RecommendationContext);

  useEffect(() => {
    fetchRecomendacoes();
  }, []);

  if (loading && recomendacoes.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#333" />
        <Text style={styles.loadingText}>Carregando recomendações...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendações Inteligentes</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={recomendacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.colaborador}>{item.colaborador}</Text>
            <Text style={styles.info}>Área: {item.area}</Text>
            <Text style={styles.score}>Score: {(item.score * 100).toFixed(0)}%</Text>
            {item.fatores && item.fatores.length > 0 && (
              <View>
                <Text style={styles.subTitle}>Fatores Considerados:</Text>
                {item.fatores.map((fator, idx) => (
                  <Text key={idx} style={styles.fator}>• {fator}</Text>
                ))}
              </View>
            )}
            <Button text="Ver Detalhes" onPress={() => {}} />
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Nenhuma recomendação disponível.</Text>
          </View>
        }
      />
      <Button text="Atualizar" onPress={() => fetchRecomendacoes()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F6F6F8' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 16, color: '#333' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333', marginBottom: 12, textAlign: 'center' },
  errorText: { color: '#e74c3c', marginBottom: 12, textAlign: 'center' },
  colaborador: { fontSize: 17, fontWeight: '600', marginBottom: 6, color: '#111' },
  info: { fontSize: 15, color: '#444', marginBottom: 4 },
  score: { fontSize: 16, fontWeight: '600', color: '#2ecc71', marginBottom: 8 },
  subTitle: { fontSize: 14, fontWeight: '600', marginTop: 8, marginBottom: 4, color: '#333' },
  fator: { fontSize: 14, color: '#555', marginLeft: 8, marginBottom: 2 },
  empty: { marginTop: 40, alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#888' },
});
