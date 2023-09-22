import React, {useState} from "react";
import { View, Platform, Switch, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from "../components/HeaderTitle";
import { CumstomSwitch } from "../components/CumstomSwitch";


export const SwitchScreens = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: string)=>{
    setState({...state, [field]: value})
  }


  return (
    <View style={{marginHorizontal:20}} >

    <HeaderTitle title="Switches" />
    
    <View style={styles.switchRow} >
      <Text style={[(state.isActive) ? styles.isActive : styles.text ]} >isActive</Text>
      <CumstomSwitch isOn={ state.isActive } onChange={(value)=> onChange(value, "isActive")} />
    </View>
    <View style={styles.switchRow} >
      <Text style={[(state.isHungry) ? styles.isActive : styles.text ]} >isHungry</Text>
      <CumstomSwitch isOn={ state.isActive } onChange={(value)=> onChange(value, "isHungry")} />
    </View>
    <View style={styles.switchRow} >
      <Text style={[(state.isHappy) ? styles.isActive : styles.text ]} >isHappy</Text>
      <CumstomSwitch isOn={ state.isActive } onChange={(value)=> onChange(value, "isHappy")} />
    </View>

    <Text style={styles.text} >{JSON.stringify(state, null, 5)}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    text:{
      fontSize:30,
      color: "black",
    },
    switchRow:{
      flexDirection: "row",
      justifyContent:"space-between",
      marginVertical:20,
    },
    isActive:{
      fontSize:30,
      color:"white",
      backgroundColor:"#5856D6",
      borderRadius:10,
    }
});