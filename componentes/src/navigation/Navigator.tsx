import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const Navigator = () =>  {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}