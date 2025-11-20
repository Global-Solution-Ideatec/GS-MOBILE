import { Alert } from 'react-native';

export interface ToastConfig {
  title?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export const toastService = {
  success: (message: string, title: string = 'Sucesso') => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  },

  error: (message: string, title: string = 'Erro') => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  },

  warning: (message: string, title: string = 'Aviso') => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  },

  info: (message: string, title: string = 'Informação') => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  },

  confirm: (
    message: string,
    onConfirm: () => void,
    onCancel?: () => void,
    title: string = 'Confirmação'
  ) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'Cancelar', onPress: onCancel, style: 'cancel' },
        { text: 'Confirmar', onPress: onConfirm, style: 'default' },
      ]
    );
  },
};
