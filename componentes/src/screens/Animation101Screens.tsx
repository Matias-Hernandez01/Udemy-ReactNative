import React, {useRef} from "react";
import { View, StyleSheet,Animated, Button, Easing } from 'react-native';

import { useAnimation } from "../hooks/useAnimation";


export const Animation101Screens = () => {

  const {opacity, position, fadeIn, fadeOut, startPosition} = useAnimation();


  return (
    <View style={styles.container} >
      <Animated.View style={
        {...styles.purpleBox,
          opacity: opacity,
          transform: [{
            translateY: position,
          }],
          
        }} />

      <View style={styles.buttonContainer} >
        <View style={{
          paddingVertical:10
        }} >
          <Button 
            title="FadeIn"
            onPress={() => {fadeIn(), startPosition(-150)}}
          />
      </View>
        <View>
          <Button 
           title="FadeOut"
           onPress={fadeOut}
           />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  purpleBox:{
    backgroundColor: "#5856D6",
    width: 150,
    height:150,
    marginBottom:20
  },
  buttonContainer:{
    
  }
});