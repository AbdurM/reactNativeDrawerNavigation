import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cats from '../screens/drawer_screens/dashboard/tab_screens/Cats'
import Birds from '../screens/drawer_screens/dashboard/tab_screens/Birds'
import Dogs from '../screens/drawer_screens/dashboard/tab_screens/Dogs'

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cats" component={Cats} />
      <Tab.Screen name="Dog" component={Dogs} />
      <Tab.Screen name="Birds" component={Birds} />
    </Tab.Navigator>
  );
}