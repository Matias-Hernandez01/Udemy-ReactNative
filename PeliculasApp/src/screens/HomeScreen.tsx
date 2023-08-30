import React from "react"
import {View, ActivityIndicator, Dimensions, ScrollView} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';

import { UseMovies } from "../hooks/useMovies"
import { MovieCard } from "../components/MovieCard";
import { FlatListComponents } from "../components/FlatListComponents";


const {width: windowWidth} = Dimensions.get("window")

export const HomeScreen = () => {

  const {nowPlaying,popular,topRated, upcoming, isLoading} = UseMovies();
  const {top} = useSafeAreaInsets()

  if(isLoading){
    return <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
      <ActivityIndicator color="red" size={100} />
    </View>
  }

  return (

    <ScrollView>

    <View style={{marginTop:top + 20}} >
      
     <View style={{height:440}} >
     <Carousel 
      vertical={ false }
      data={nowPlaying}
      renderItem={({item}:any)=> <MovieCard movie={item}/>  }
      sliderWidth={windowWidth}
      itemWidth={300}
      inactiveSlideOpacity={0.9}
      />
      </View>
        
      <FlatListComponents title="Popular" data={popular}/>
      <FlatListComponents title="Top Rated" data={topRated}/>
      <FlatListComponents title="Upcoming" data={upcoming}/>
        
      </View>
    </ScrollView>
  )
}