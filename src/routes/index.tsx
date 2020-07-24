import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import IssueWebView from '../pages/IssueWebView';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Repository"
          options={{ headerShown: false }}
          component={Repository}
        />
        <Stack.Screen
          name="IssueWebView"
          component={IssueWebView}
          options={{ headerShown: true, headerTitle: 'Página Da Issue' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
