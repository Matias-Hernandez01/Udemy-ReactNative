import { StackScreenProps } from "@react-navigation/stack";
import React from "react-native";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParams } from "../navigation/Navigation";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/Ionicons";

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams,"Detail">{}

export const DetailScreen = ({route}: Props)  => {
  
  const movie = route.params;
  const urlImage = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`

  return (
    <ScrollView>
      <View style={styles.imageContainer} >
        <View style={styles.imageRadius} >
        <Image  
          source={{uri: urlImage}}
          style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer} >
        <Text style={styles.subtitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>
      </View>
      <View style={styles.descriptionContainer} >
        <Icon 
          name="star-outline"
          color="gray"
          size={20}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    height:screenHeight * 0.7,
    width:"100%",
    shadowColor: "#000",
    borderRadius:18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  imageRadius:{
    flex:1,
    overflow:"hidden",
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
      
    },
  posterImage:{
    flex:1,
  },
  descriptionContainer:{
    marginHorizontal:20,
    marginTop:20,
  },
  subtitle:{
    fontSize:16,
    color: "gray"
  },
  title:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
  }

});