import AsyncStorage from '@react-native-async-storage/async-storage';

export async function register(email: string, password: string): Promise<void> {
  const users = JSON.parse(await AsyncStorage.getItem('users') || '{}');
  if (users[email]) throw new Error('Usuário já cadastrado');
  users[email] = { password };
  await AsyncStorage.setItem('users', JSON.stringify(users));
}

export async function login(email: string, password: string): Promise<void> {
  const users = JSON.parse(await AsyncStorage.getItem('users') || '{}');
  if (!users[email] || users[email].password !== password) throw new Error('Credenciais inválidas');
  await AsyncStorage.setItem('loggedIn', JSON.stringify(email));
}

export async function logout(): Promise<void> {
  await AsyncStorage.removeItem('loggedIn');
}

export async function getLoggedIn(): Promise<string | null> {
  const email = await AsyncStorage.getItem('loggedIn');
  return email ? JSON.parse(email) : null;
}
