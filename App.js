
import React from 'react';
import { StyleSheet} from 'react-native';
import Home from './screens/home'
import Post from './screens/postDetails'
// Navigation

import 'react-native-gesture-handler'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRoute="Home"
       screenOptions = {{
         headerShown : false
       }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component = {Post } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
