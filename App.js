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

// Screen Stack
import Home from './activity/Home';
import Login from './activity/login';
import LoginAkun from './activity/loginakun';
import SignUp from './activity/SignUp';
import Forgot from './activity/Forgot';
import Currency from './activity/currency';
import Details from './activity/details';
import GrandRoyal from './activity/grandroyal';
import More from './activity/more';
import Review from './activity/review';
import Filters from './activity/filters';
import Cancel from './activity/cancel';
import Rooms from './activity/rooms';

//Screen Profile
import Profile from './activity/Profile/profile';
import Settings from './activity/Profile/Settings';
import EditProfile from './activity/Profile/editProfile';
import Help from './activity/Profile/help';

//Screen Trips
import Trips from './activity/Trips/trips';
import Favorites from './activity/Trips/favorites';
import Finished from './activity/Trips/finished';

//Screen Explore
import Started from './activity/Explore/getstarted';
import Explore from './activity/Explore/explore';
import Where from './activity/Explore/where';
import Roma from './activity/Explore/roma';
import Map from './activity/Explore/map';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStk = createStackNavigator();
const TripStk = createStackNavigator();
const ExStk = createStackNavigator();

function StackProfile() {
  return (
    <ProfileStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ProfileStk.Screen name="Profile" component={Profile} />
      <ProfileStk.Screen name="Settings" component={Settings} />
      <ProfileStk.Screen name="EditProfile" component={EditProfile} />
      <ProfileStk.Screen name="Help" component={Help} />
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

function StackExplore() {
  return (
    <ExStk.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ExStk.Screen name="Explore" component={Started} />
      <ExStk.Screen name="London" component={Explore} />
      <ExStk.Screen name="Where" component={Where}/>
      <ExStk.Screen name="Roma" component={Roma}/>
      <ExStk.Screen name="Map" component={Map}/>
    </ExStk.Navigator>

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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00695c',
        inactiveTintColor: '#00ddbf'
      }}
    >
      <Tab.Screen name="Explore" component={StackExplore} />
      <Tab.Screen name="Trips" component={StackTrips} />
      <Tab.Screen name="Profile" component={StackProfile} />
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
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="GrandRoyal" component={GrandRoyal} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Filters" component={Filters} />
          <Stack.Screen name="Cancel" component={Cancel} />
          <Stack.Screen name="Rooms" component={Rooms} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}