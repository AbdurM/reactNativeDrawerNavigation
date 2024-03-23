import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/drawer_screens/dashboard/Dashboard'
import Profile from '../screens/drawer_screens/Profile'
import Settings from '../screens/drawer_screens/Settings'
import { routeNames } from './routeNames';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={routeNames.Drawer.Dashboard} component={Dashboard} screenOptions={{ headerShown: false }} />
            <Drawer.Screen name={routeNames.Drawer.Profile} component={Profile} />
            <Drawer.Screen name={routeNames.Drawer.Settings} component={Settings} />
        </Drawer.Navigator>
    );
}