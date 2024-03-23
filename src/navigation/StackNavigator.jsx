import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ItemDetails from '../screens/generic/ItemDetails';
import { DrawerNavigator } from './DrawerNavigator';
import LoginHome from '../screens/login/loginHome';
import { routeNames } from './routeNames';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name={routeNames.StackNavigator.Login} component={LoginHome} />
                <Stack.Screen name={routeNames.StackNavigator.DrawerNavigator} component={DrawerNavigator} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name={routeNames.StackNavigator.ItemDetails} component={ItemDetails} />
            </Stack.Group>
        </Stack.Navigator>
    )
}