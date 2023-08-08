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
  },
  resultadoPequeno:{
    color:"rgba(255,255,255,0.5)",
    fontSize:30,
    textAlign:"right",
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
  },
  button:{
    backgroundColor:"#9B9B9B",
    height:80,
    width:80,
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center",
  },
  bottonTexto:{
    color:"black",
    fontSize:40,
    fontWeight:"300",
  }

});