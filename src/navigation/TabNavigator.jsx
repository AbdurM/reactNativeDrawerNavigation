
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cats from '../screens/drawer_screens/dashboard/tab_screens/Cats'
import Birds from '../screens/drawer_screens/dashboard/tab_screens/Birds'
import Dogs from '../screens/drawer_screens/dashboard/tab_screens/Dogs'

const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cats" component={Cats} />
      <Tab.Screen name="Dog" component={Dogs} />
      <Tab.Screen name="Birds" component={Birds} />
    </Tab.Navigator>
  );
}