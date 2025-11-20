import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, PasswordInput, Button, Loader } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const senhaValida = senha.length >= 8;
  const senhasIguais = senha === confirmSenha;

  const handleRegister = async () => {
    setError('');
    
    if (!email) {
      setError('Por favor, insira um e-mail.');
      return;
    }
    
    if (!senhaValida) {
      setError('A senha deve ter no mínimo 8 caracteres.');
      return;
    }
    
    if (!senhasIguais) {
      setError('As senhas não correspondem.');
      return;
    }

    setLoading(true);
    try {
      // Chamada para endpoint de registro (ajuste conforme seu backend)
      await axios.post(`${API_BASE_URL}/auth/register`, {
        email,
        password: senha,
      });

      Alert.alert('Sucesso', 'Conta criada! Faça login agora.');
      navigation.navigate('Login');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao cadastrar. Tente novamente.';
      setError(errorMessage);
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IdeiaTech - Cadastro</Text>
      <Input 
        label="E-mail" 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Digite seu e-mail"
      />
      <PasswordInput 
        label="Senha" 
        value={senha} 
        onChangeText={setSenha} 
        placeholder="Crie uma senha (mínimo 8 caracteres)"
      />
      <PasswordInput 
        label="Confirmar Senha" 
        value={confirmSenha} 
        onChangeText={setConfirmSenha} 
        placeholder="Confirme sua senha"
      />
      {!senhaValida && senha.length > 0 && (
        <Text style={styles.error}>Senha abaixo de 8 caracteres</Text>
      )}
      {senhaValida && !senhasIguais && confirmSenha.length > 0 && (
        <Text style={styles.error}>Senhas não correspondem</Text>
      )}
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Button 
        text="Cadastrar" 
        onPress={handleRegister} 
        disabled={!email || !senhaValida || !senhasIguais || loading}
      />
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 22, backgroundColor: '#FAFAFA' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 24, textAlign: 'center' },
  error: { color: '#e74c3c', fontWeight: 'bold', marginBottom: 6, marginTop: 6, textAlign: 'center' },
});
