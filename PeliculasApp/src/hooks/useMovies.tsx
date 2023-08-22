import {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/MovieInterface';


export const UseMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

  const getMovies = async ()=>{
    const response = await movieDB.get<MovieDBNowPlaying>("/now_playing")
    setPeliculasEnCine(response.data.results)
  }


 useEffect(()=>{
    //now_playing
    getMovies();

    setIsLoading(false)

  },[])
 
  return {
    peliculasEnCine,
    isLoading,
  }
  
}