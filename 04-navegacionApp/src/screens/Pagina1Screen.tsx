import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";

interface Props extends StackScreenProps<any, any> {

}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={{marginHorizontal:20}} >
      <Text style={{fontSize:30, fontWeight:"500", color:"#9b9b9b"}} >Screen 1</Text>
      <Button title="Ir página 2" onPress={()=>{navigation.navigate("Pagina2Screen")}} />
    
      <View style={styless.buttonsContainers} >
      <TouchableOpacity onPress={()=>{navigation.navigate("PersonaScreen", {id:1, name:"Matias", lastName:"Hernandez", age:22})}} >
        <View style={styless.container} >
        <Text style={styless.btnNames}> Matias</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("PersonaScreen", {id:2, name:"Lucas", lastName:"Hernandez", age:18})}} >
        <View style={styless.container} >
          <Text style={styless.btnNames}>Lucas</Text>
        </View>
      </TouchableOpacity>
      </View>

    </View>
  )
}


const styless = StyleSheet.create({
  btnNames:{
    backgroundColor:"#5086c1",
    color:"white",
    fontSize:20,
    fontWeight:"500",
    width:"100%",
    textAlign:"center"
  },
  container:{
    width:100,
    marginHorizontal:10,
    borderWidth:3,
    borderColor:"#84b6f4",
    borderRadius:10,
    height:40,
    justifyContent:"center",
    backgroundColor:"#5086c1",
  },
  buttonsContainers:{
    width:"100%",
    flexDirection:"row",
  }
});