/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Setting" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
