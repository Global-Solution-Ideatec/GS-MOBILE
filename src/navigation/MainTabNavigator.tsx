import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DashboardScreen,
  TasksScreen,
  SkillsScreen,
  MotivationScreen,
  FeedbackScreen,
  AboutScreen,
  RecommendationsScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeToggle } from '../components';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#FAFAFA' },
      }}>
      <Tab.Screen
        name="Bem-estar"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Tarefas"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="format-list-checkbox" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Habilidades"
        component={SkillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="star" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Recomendações"
        component={RecommendationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="lightbulb-on-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Inspiração"
        component={MotivationScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="lightbulb-on" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="message-bulleted" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="information-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
