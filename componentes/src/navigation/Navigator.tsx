import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Animation101Screens } from '../screens/Animation101Screens';
import { Animation102Screens } from '../screens/Animation102Screens';
import { SwitchScreens } from '../screens/SwitchScreens';
import { AlertScreens } from '../screens/AlertScreens';
import { TextInputScreens } from '../screens/TextInputScreens';
import { PullToRefreshScreens } from '../screens/PullToRefreshScreens';
import { SectionListScreens } from '../screens/SectionListScreens';

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
      <Stack.Screen name="SwitchScreens" component={SwitchScreens} />
      <Stack.Screen name="AlertScreens" component={AlertScreens} />
      <Stack.Screen name="TextInputScreens" component={TextInputScreens} />
      <Stack.Screen name="PullToRefreshScreens" component={PullToRefreshScreens} />
      <Stack.Screen name="SectionListScreens" component={SectionListScreens} />

    </Stack.Navigator>
  );
}