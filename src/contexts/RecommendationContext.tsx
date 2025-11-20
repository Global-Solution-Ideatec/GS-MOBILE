import React, { createContext, useState } from 'react';
import { recomendacaoApi } from '../services/api/recomendacaoApi';

interface Recomendacao {
  id: string;
  colaborador: string;
  area: string;
  score: number;
  fatores?: string[];
}

interface RecommendationContextProps {
  recomendacoes: Recomendacao[];
  recomendacaoDetalhes: any | null;
  loading: boolean;
  error: string | null;
  fetchRecomendacoes: (area?: string) => Promise<void>;
  fetchDetalhes: (id: string) => Promise<void>;
  solicitarRecomendacao: (payload: any) => Promise<void>;
}

export const RecommendationContext = createContext<RecommendationContextProps>({
  recomendacoes: [],
  recomendacaoDetalhes: null,
  loading: false,
  error: null,
  fetchRecomendacoes: async () => {},
  fetchDetalhes: async () => {},
  solicitarRecomendacao: async () => {},
});

export const RecommendationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recomendacoes, setRecomendacoes] = useState<Recomendacao[]>([]);
  const [recomendacaoDetalhes, setRecomendacaoDetalhes] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecomendacoes = async (area?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await recomendacaoApi.getRecomendacaoSincrona(area);
      setRecomendacoes(data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao buscar recomendações.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetalhes = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await recomendacaoApi.getRecomendacaoDetalhes(id);
      setRecomendacaoDetalhes(data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao buscar detalhes.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const solicitarRecomendacao = async (payload: any) => {
    setLoading(true);
    setError(null);
    try {
      await recomendacaoApi.solicitarRecomendacao(payload);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao solicitar recomendação.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecommendationContext.Provider
      value={{
        recomendacoes,
        recomendacaoDetalhes,
        loading,
        error,
        fetchRecomendacoes,
        fetchDetalhes,
        solicitarRecomendacao,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};
