import React, { useContext } from "react";
import {View, Text} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { AuthContext } from "../context/AuthContext";


export const SettingsScreens = () => {

  const insets = useSafeAreaInsets();
  
  const {authState} = useContext(AuthContext)
  

  return (
    <SafeAreaView style={{marginTop: insets.top}} >
      <Text>Settings Screens</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </SafeAreaView>
  )
}