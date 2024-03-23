import Birds from '../screens/drawer_screens/dashboard/tab_screens/Birds';
import { DrawerNavigator } from './DrawerNavigator';
import StackNavigator from './StackNavigator';

export const routeNames = {
    Drawer: {
        Dashboard: 'Dashboard',
        Profile: 'Profile',
        Settings: 'Settings',
    },
    TopTab: {
        Cats: 'Cats',
        Dogs: 'Dogs',
        Birds: 'Birds',
    },
    StackNavigator: {
        Login: 'Login',
        DrawerNavigator: 'DrawerNavigator',
        ItemDetails: 'ItemDetails',
    },
};
