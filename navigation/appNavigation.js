import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ArScreen from '../screens/ARScreen';
import ProfileScreen from '../screens/ProfileScreen';
import useAuth from '../hooks/useAuth';
import {themeColors} from '../theme';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  // useAuth hook needed to know if user is loggeed in
  const {user} = useAuth();
  // go directly to home screen if user exists
  if (user) {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={themeColors.bg} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeScreen}
            initialParams={{user: user}}
          />
          <Stack.Screen
            name="ARScreen"
            options={{headerShown: false}}
            component={ArScreen}
          />
           <Stack.Screen
            name="Profile"
            options={{headerShown: false}}
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  // show welcome screen and invite user to log in
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={themeColors.bg} />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
