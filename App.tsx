import 'react-native-url-polyfill/auto';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabase/supabaseClient';
import Auth from './components/Auth';
import HomeScreen from './screens/HomeScreen';
import Page2Screen from './screens/Page2Screen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import SignOutButton from './components/SignOutButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Session } from '@supabase/supabase-js';

export type RootStackParamList = {
  Home: undefined;
  Page2: { screen: string } | undefined;
  Screen1: undefined;
  Screen2: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={session ? 'Home' : 'SignIn'}>
        {session ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Page2" component={Page2Screen} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={Auth} />
            <Stack.Screen name="SignUp" component={Auth} />
          </>
        )}
      </Stack.Navigator>
      {session && <SignOutButton />}
    </NavigationContainer>
  );
}
