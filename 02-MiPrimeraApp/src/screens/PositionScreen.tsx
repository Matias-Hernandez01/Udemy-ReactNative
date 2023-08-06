import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const PositionScreen = () => {
  return (
    <View style={styles.container} >
      <View style={styles.cajaVerde}></View>
      <View style={styles.cajaAmarilla} ></View>
      <View style={styles.cajaRoja}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#28C4D9",
    },
    cajaAmarilla:{
      backgroundColor:"yellow",
      borderWidth:10,
      borderColor:"white",
      width:100,
      height:100,
      position:"absolute",
      right:0
    },
    cajaRoja:{
      backgroundColor:"red",
      borderWidth:10,
      borderColor:"white",
      width:100,
      height:100,
      position:"absolute",
      bottom:0,
      right:0
    },
    cajaVerde:{
      backgroundColor:"green",
      borderWidth:10,
      borderColor:"white",
      // bottom:0,
      // height:100,
      // position:"absolute",
      // width:100,
      ...StyleSheet.absoluteFillObject
    }
});