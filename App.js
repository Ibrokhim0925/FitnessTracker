import React from 'react';
// Task: Setup React Navigation.
// 1. Import NavigationContainer from @react-navigation/native.
// 2. Import createStackNavigator from @react-navigation/stack.
// 3. Import HomeScreen and AddScreen from './src'.
// 4. Create a Stack Navigator.
// 5. Wrap the navigator in NavigationContainer.
// 6. Define two screens: "Home" (initial) and "Add Workout".
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import AddScreen from './src/AddScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Workout" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}       