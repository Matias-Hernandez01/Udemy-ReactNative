import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


interface props{
  texto: string,
  color?: string,
  ancho?: boolean,
  accion: (numeroTexto: string)=> void
}

const BotonCalculadora = ({color="#2D2D2D", texto, ancho = false, accion}: props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)} >
      <View style={{...styles.button, backgroundColor:color, width: (ancho) ? 180 : 80}}>
        <Text style={{...styles.bottonTexto, color: (color === "#9B9B9B") ? "black" : "white"}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#2D2D2D",
    height:80,
    width:80,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    marginHorizontal:10,
  },
  bottonTexto:{
    color:"white",
    fontSize:30,
    fontWeight:"400",
    textAlign:"center"
  }
});


export default BotonCalculadora