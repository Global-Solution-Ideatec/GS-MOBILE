import axios, { AxiosError } from 'axios';

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;
    
    // Erro de resposta do servidor
    if (axiosError.response) {
      return {
        message: axiosError.response.data?.message || 'Erro ao processar requisição',
        code: axiosError.response.data?.code || 'ERROR',
        status: axiosError.response.status,
      };
    }
    
    // Erro de requisição (sem resposta)
    if (axiosError.request) {
      return {
        message: 'Sem conexão com o servidor. Verifique sua internet.',
        code: 'NO_CONNECTION',
        status: 0,
      };
    }
  }
  
  // Erro desconhecido
  return {
    message: 'Erro desconhecido. Tente novamente.',
    code: 'UNKNOWN_ERROR',
  };
};

export const logError = (error: ApiError, context?: string) => {
  console.error(`[${context || 'ERROR'}] ${error.code}: ${error.message}`);
};
