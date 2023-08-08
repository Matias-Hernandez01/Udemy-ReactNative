import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fondo:{
    flex:1,
    backgroundColor:"black",
  },
  calculadoraContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:"flex-end"
  },
  resultado:{
    textAlign:"right",
    color:"white",
    fontSize:60,
    marginBottom:20
  },
  resultadoPequeno:{
    color:"rgba(255,255,255,0.5)",
    fontSize:30,
    textAlign:"right",
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:18,
    paddingHorizontal:10,
  },


});