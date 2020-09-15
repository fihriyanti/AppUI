/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import Home from './activity/Home';
import Login from './activity/login';
import LoginAkun from './activity/loginakun';
import SignUp from './activity/SignUp';
import Forgot from './activity/Forgot';
import Started from './activity/getstarted';
import Trips from './activity/trips';
import Profile from './activity/profile';
import Settings from './activity/Settings';
import EditProfile from './activity/editProfile';
import Currency from './activity/currency';
import Favorites from './activity/favorites';
import Finished from './activity/finished';
import Seacrh from './activity/search';

const Stack = createStackNavigator();
const ProfileStk = createStackNavigator();
const TripStk = createStackNavigator();

function StackProfile() {
  return (
    <ProfileStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ProfileStk.Screen name="Profile" component={Profile} />
      <ProfileStk.Screen name="Settings" component={Settings} />
      <ProfileStk.Screen name="EditProfile" component={EditProfile} />
    </ProfileStk.Navigator>

  )
}

function StackTrips() {
  return (
    <TripStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <TripStk.Screen name="Trips" component={Trips} />
      <TripStk.Screen name="Favorites" component={Favorites} />
      <TripStk.Screen name="Finished" component={Finished} />
    </TripStk.Navigator>

  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused
              ? 'search-outline'
              : 'ios-search-outline';
          } else if (route.name === 'Trips') {
            iconName = focused ? 'ios-heart-outline' : 'md-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-outline' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00695c',
        inactiveTintColor: '#00ddbf'
      }}
    >
      <Tab.Screen name="Explore" component={Started} />
      <Tab.Screen name="Trips" component={StackTrips} />
      <Tab.Screen name="Profile" component={StackProfile} />
      {/* <Tab.Screen name="Settings" component={Settings}/> */}
    </Tab.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Masuk" component={LoginAkun} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Tab" component={MyTabs} />
          <Stack.Screen name="Currency" component={Currency} />
          <Stack.Screen name="Search" component={Seacrh} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}