import React, { useEffect } from "react";
import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {
  
  useEffect(()=>{
    console.log("Tab1ScreenEffect")
  },[])
  
  return (
    <View>
      <Text>Tab1Screen</Text>
      <Icon name="accessibility-outline" size={30} />
    </View> 
  )
}