import axiosClient from './axiosClient';

interface Recomendacao {
  id: string;
  colaborador: string;
  area: string;
  score: number;
  fatores?: string[];
}

export const recomendacaoApi = {
  async getRecomendacaoSincrona(area?: string): Promise<Recomendacao[]> {
    try {
      const params = area ? { area } : {};
      const response = await axiosClient.get<Recomendacao[]>('/recomendacao/colaborador', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async solicitarRecomendacao(payload: any): Promise<any> {
    try {
      const response = await axiosClient.post('/recomendacao/request', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getRecomendacaoDetalhes(id: string): Promise<any> {
    try {
      const response = await axiosClient.get(`/recomendacao/${id}/fatores`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
