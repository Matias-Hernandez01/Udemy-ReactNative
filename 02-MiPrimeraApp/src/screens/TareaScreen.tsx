import { Text, View, StyleSheet } from "react-native"

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaAzul}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#28425B",
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    cajaMorada:{
      backgroundColor:"#5856D6",
      borderColor:"white",
      borderWidth:10,
      height:100,
      width:100,
    },
    cajaNaranja:{
      backgroundColor:"orange",
      borderColor:"white",
      borderWidth:10,
      height:100,
      width:100,
    },
    cajaAzul:{
      backgroundColor:"blue",
      borderColor:"white",
      borderWidth:10,
      height:100,
      width:100,
    }
});