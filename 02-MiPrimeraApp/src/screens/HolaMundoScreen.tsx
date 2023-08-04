import { View, Text } from "react-native"

const HolaMundoScreen = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }} >
      <Text style={{
        color:"black",
        fontSize:55,
        fontWeight:"bold",
        fontFamily: "monospace",
        textAlign:"center"
      }} >Hola mundo</Text>
    </View>
  )
}

export default HolaMundoScreen;