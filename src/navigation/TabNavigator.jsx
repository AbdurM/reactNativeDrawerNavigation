
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cats from '../screens/drawer_screens/dashboard/tab_screens/Cats'
import Birds from '../screens/drawer_screens/dashboard/tab_screens/Birds'
import Dogs from '../screens/drawer_screens/dashboard/tab_screens/Dogs'
import { routeNames } from './routeNames';

const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routeNames.TopTab.Dogs} component={Dogs} />
      <Tab.Screen name={routeNames.TopTab.Cats} component={Cats} />
      <Tab.Screen name={routeNames.TopTab.Birds} component={Birds} />
    </Tab.Navigator>
  );
}