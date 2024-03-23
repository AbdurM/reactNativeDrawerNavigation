import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cats from '../screens/drawer_screens/dashboard/tab_screens/Cats'
import Birds from '../screens/drawer_screens/dashboard/tab_screens/Birds'
import Dogs from '../screens/drawer_screens/dashboard/tab_screens/Dogs'
import { routeNames } from './routeNames';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routeNames.TopTab.Cats} component={Cats} />
      <Tab.Screen name={routeNames.TopTab.Dogs} component={Dogs} />
      <Tab.Screen name={routeNames.TopTab.Birds} component={Birds} />
    </Tab.Navigator>
  );
}