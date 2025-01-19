import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WaitListScreen } from '@screens';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar className="bg-primary" />
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="HOME">
            <Stack.Screen name="HOME" component={HomeScreen} />
            <Stack.Screen name="WAITLIST" component={WaitListScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
