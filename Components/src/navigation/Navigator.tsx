import React from "react";

import { HomeScreens } from "../screens/HomeScreens";

import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home"  component={HomeScreens}/>
    </Stack.Navigator>
  )
}