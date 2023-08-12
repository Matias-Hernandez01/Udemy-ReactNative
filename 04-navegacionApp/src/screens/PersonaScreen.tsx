import React, { useEffect } from "react";
import {View, Text} from "react-native";
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
// import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigator/StackNavigator";

// interface RouterParams{
//   id: number,
//   name:string,
//   lastName:string,
//   age: number
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams;
  const params = route.params;
  useEffect(()=>{
    navigation.setOptions({
      title:params!.name
    })
  },[])
  
  
  return (
    <View style={{marginHorizontal:20}} >
      <Text style={{fontSize:20, fontWeight:"600", color:"black"}}>{JSON.stringify(params, null,3)}</Text>
    </View>
  )
}