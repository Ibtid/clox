import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import HospitalListScreen from '../screens/HospitalListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

import ReownedDoctorsScreen from '../screens/ReownedDoctorsScreen';
import FundSomeoneListScreen from '../screens/FundSomeoneListScreen';
import DoctorDetailScreen from '../screens/DoctorDetailScreen';
import HospitalDetailScreen from '../screens/HospitalDetailScreen';
import FundSomeoneDetailScreen from '../screens/FundSomeoneDetailScreen';

const Tabs = createBottomTabNavigator();
const HomeNavigation = () => {
  return (
    <Tabs.Navigator
      sceneContainerStyle={style.container}
      initialRouteName={'Settings'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'lightgray',
        tabBarActiveBackgroundColor: '#000000',
        tabBarInactiveBackgroundColor: '#000000',
        tabBarStyle: [
          {
            display: 'flex',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            overflow: 'hidden',
            position: 'fixed',
            bottom: 0,
          },
          null,
        ],
      }}
      // tabBarOptions={{
      //   showIcon: true,
      //   activeTintColor: '#fff',
      //   inactiveTintColor: 'lightgray',
      //   activeBackgroundColor: '#000000',
      //   inactiveBackgroundColor: '#000000',
      //   style: {
      //     backgroundColor: '#000000',
      //     paddingBottom: 3,
      //   },
      // }}
    >
      <Tabs.Screen
        name='Profile'
        component={ReownedDoctorsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Settings'
        component={FundSomeoneDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const style = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
  },
});

export default HomeNavigation;
