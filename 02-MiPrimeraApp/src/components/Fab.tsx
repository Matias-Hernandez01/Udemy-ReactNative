import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"


interface Props{
  title:string,
  position?: "br" | "bl",
  onPress: () => void;
}


const Fab = ({title,onPress, position = "br"}: Props) => {


  return (
    <View style={[styles.fabLocation, (position === "bl" ? styles.left : styles.rigth) ]} >
      <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('blue', false, 30) }   >
     <View style={styles.fab} >
      <Text style={styles.fabText}>{title}</Text>
      </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  fabLocation:{
    bottom: 25,
    position:"absolute",
    
  },
  rigth:{
    right: 25,
  },
  left:{
    left:25,
  },
  fab:{
    alignItems:"center",
    backgroundColor: "#5856D6",
    borderRadius: 100,
    height:60,
    justifyContent: "center",
    width:60,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText:{
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
  }
})


export default Fab