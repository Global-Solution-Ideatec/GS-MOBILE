import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { UserDataProvider } from './src/contexts/UserDataContext';
import { RecommendationProvider } from './src/contexts/RecommendationContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserDataProvider>
          <RecommendationProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </RecommendationProvider>
        </UserDataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
