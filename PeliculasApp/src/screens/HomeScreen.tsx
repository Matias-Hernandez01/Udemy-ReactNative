import React, { useEffect } from "react"
import {View, Text,ActivityIndicator} from "react-native"
import { UseMovies } from "../hooks/UseMovies"



export const HomeScreen = () => {

  const {peliculasEnCine, isLoading} = UseMovies();


  if(isLoading){
    return <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
      <ActivityIndicator color="red" size={100} />
    </View>
  }

  return (
    <View>
      <Text> HomeScreen</Text>
    </View>
  )
}