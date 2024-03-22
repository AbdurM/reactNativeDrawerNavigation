import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ItemDetails from '../screens/generic/ItemDetails';
import { DrawerNavigator } from './DrawerNavigator';
import LoginHome from '../screens/login/loginHome';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name='Login' component={LoginHome} />
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name='ItemDetails' component={ItemDetails} />
            </Stack.Group>
        </Stack.Navigator>
    )
}