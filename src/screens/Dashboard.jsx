import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';

const Tab = createBottomTabNavigator();
export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cats" component={Cats} />
      <Tab.Screen name="Dog" component={Dogs} />
      <Tab.Screen name="Birds" component={Birds} />
    </Tab.Navigator>
  );
}

const Dashboard = () => {
  return (
    <Home/>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

})