import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { PasswordInput, Button, Loader } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen: React.FC = () => {
  const { login, loading, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [localError, setLocalError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    setLocalError('');
    
    if (!email || !senha) {
      setLocalError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await login(email, senha);
      // Navegação automática ocorre via AppNavigator ao detectar user no contexto
    } catch (err: any) {
      setLocalError(err.message || 'Erro ao fazer login.');
      Alert.alert('Erro', err.message || 'Email ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IdeiaTech - Login</Text>
      <PasswordInput 
        label="E-mail" 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Digite seu e-mail"
      />
      <PasswordInput 
        label="Senha" 
        value={senha} 
        onChangeText={setSenha} 
        placeholder="Digite sua senha"
      />
      {(localError || error) && <Text style={styles.error}>{localError || error}</Text>}
      <Button 
        text="Entrar" 
        onPress={handleLogin} 
        disabled={!email || !senha || loading} 
      />
      <Button 
        text="Cadastrar-se" 
        onPress={() => navigation.navigate('Register')} 
      />
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 22, backgroundColor: '#FAFAFA' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 24, textAlign: 'center' },
  error: { color: '#e74c3c', fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
});
