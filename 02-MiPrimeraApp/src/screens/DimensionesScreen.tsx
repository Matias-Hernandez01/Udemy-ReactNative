import React from "react";
import {View, StyleSheet, Dimensions, Text, useWindowDimensions} from "react-native";


// const {width, height} = Dimensions.get("window");

export const DimensionesScreen = () => {

  const {width, height} = useWindowDimensions()

  return (
    <View >
      <View style={styles.container} >
        <View style={{...styles.cajaMorada,
          width: width * 0.50 //* Dimension proporcional del 50% de la pantalla.
        }}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text> Width:{width}, height: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: 200,
    backgroundColor:"yellow"
  },
  cajaMorada:{
    backgroundColor:"#5856D6",
    // width: "50%",
    height:"50%",
  },
  cajaNaranja:{
    backgroundColor:"#F0A23B"
  }
});