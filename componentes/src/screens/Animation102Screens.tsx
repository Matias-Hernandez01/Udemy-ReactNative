import React, {useRef} from "react";

import { View, StyleSheet, Animated, PanResponder } from 'react-native';


export const Animation102Screens = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });


  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
      <Animated.View  {...panResponder.panHandlers} style={[pan.getLayout(), styles.purpleBox]} />
    </View>
  )
}

const styles = StyleSheet.create({
  purpleBox:{
    backgroundColor: "#75CEDB",
    width: 150,
    height:150,
  }
});