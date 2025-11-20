import React, { createContext, useState, useEffect } from 'react';
import { authApi } from '../services/api/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  login: async () => {},
  logout: async () => {},
  loading: false,
  error: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Recupera token e usuário ao iniciar app
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('jwtToken');
        const savedUser = await AsyncStorage.getItem('loggedIn');
        
        if (savedToken && savedUser) {
          setToken(savedToken);
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        console.error('Erro ao recuperar autenticação:', err);
      }
    };

    initializeAuth();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.login({ email, password });
      
      // Salva token e email
      setToken(response.token);
      setUser(email);
      
      // Persiste email no AsyncStorage
      await AsyncStorage.setItem('loggedIn', JSON.stringify(email));
      
      setLoading(false);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Email ou senha inválidos.';
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authApi.logout();
      setUser(null);
      setToken(null);
      setLoading(false);
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login: handleLogin, logout: handleLogout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
