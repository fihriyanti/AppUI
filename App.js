/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './activity/Home';
import Login from './activity/login';
import LoginAkun from './activity/loginakun';
import SignUp from './activity/SignUp';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Masuk" component={LoginAkun} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }  
}