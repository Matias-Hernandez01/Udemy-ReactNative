import React from "react";
import {View, Text, Button} from "react-native";
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import {styles} from "../theme/AppTheme";

interface Props extends StackScreenProps <any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin} >
      <Text style={{fontSize:30, fontWeight:"500", color:"#9b9b9b"}} >Screen 3</Text>  
      <Button title="Regresar" onPress={()=>{navigation.pop()}} />
      <Button title="Ir al inicio" onPress={()=>{navigation.popToTop()}} />
    </View>
  )
}