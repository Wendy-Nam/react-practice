import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useUserContext} from '../contexts/UserContext';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import Opening from './Opening';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {user} = useUserContext();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Opening"
            component={Opening}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
