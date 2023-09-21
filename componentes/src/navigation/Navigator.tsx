import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Animation101Screens } from '../screens/Animation101Screens';
import { Animation102Screens } from '../screens/Animation102Screens';

const Stack = createStackNavigator();

export const Navigator = () =>  {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101Screens" component={Animation101Screens} />
      <Stack.Screen name="Animation102Screens" component={Animation102Screens} />
    </Stack.Navigator>
  );
}