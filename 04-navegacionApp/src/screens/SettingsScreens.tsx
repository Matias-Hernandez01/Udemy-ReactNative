import React from "react";
import {View, Text} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


export const SettingsScreens = () => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{marginTop: insets.top}} >
      <Text>Settings Screens</Text>
    </SafeAreaView>
  )
}