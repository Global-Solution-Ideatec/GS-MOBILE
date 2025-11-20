import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value, onChangeText, placeholder, label, error, keyboardType,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ marginVertical: 8 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!visible}
          autoCapitalize="none"
          keyboardType={keyboardType}
        />
        <TouchableOpacity onPress={() => setVisible((v) => !v)}>
          <Icon name={visible ? 'eye-off' : 'eye'} size={22} color="#888" />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { marginBottom: 4, color: '#333', fontWeight: '600' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  errorInput: { borderColor: '#e74c3c' },
  errorText: { marginTop: 2, color: '#e74c3c', fontSize: 13 },
});
