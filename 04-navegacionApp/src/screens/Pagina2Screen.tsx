import React, {useEffect} from "react";
import {View, Text, Button} from "react-native";
import {styles} from "../theme/AppTheme";
import { useNavigation } from "@react-navigation/native";

export const Pagina2Screen = () => {
  const navigator:any = useNavigation()
  
  useEffect(() => {
    navigator.setOptions({
      title:"Hola mundo",
      headerBackTitle:"Atrás"
    })
  }, [])
  

  
  return (
    <View style={styles.globalMargin} >
      <Text style={{fontSize:30, fontWeight:"500", color:"#9b9b9b"}}>Screen 2</Text>
      <Button title="Ir página 3" onPress={()=>{navigator.navigate("Pagina3Screen")}} />
    </View>
  )
}