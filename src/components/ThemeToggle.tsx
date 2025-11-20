import React, { useContext } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}
      </Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        thumbColor={theme === 'dark' ? '#333' : '#ccc'}
        trackColor={{ false: '#ccc', true: '#333' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  label: { marginRight: 10, fontSize: 16, color: '#333', fontWeight: '600' },
});
