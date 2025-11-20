import axiosClient from './axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  email?: string;
}

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axiosClient.post<LoginResponse>('/auth/login', data);
      // Salva token no AsyncStorage
      if (response.data.token) {
        await AsyncStorage.setItem('jwtToken', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem('jwtToken');
    await AsyncStorage.removeItem('loggedIn');
  },

  async getToken(): Promise<string | null> {
    return await AsyncStorage.getItem('jwtToken');
  },
};
