import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:"red",
      flex:1,
    },
    title:{
      borderWidth: 2,
      marginHorizontal:10,
      
    }
});