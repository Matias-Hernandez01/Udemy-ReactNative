import React, { useEffect } from "react";
import {View, Text} from "react-native";


export const Tab2Screen = () => {
  useEffect(()=>{
    console.log("Tab2ScreenEffect")
  },[])
  return (
    <View>
      <Text>
        Tab2Screen
      </Text>
    </View>
  )
}