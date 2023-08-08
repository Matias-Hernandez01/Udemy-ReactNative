import {Text, TouchableOpacity, View} from "react-native";
import { styles } from "../theme/appTheme";
import BotonCalculadora from "../components/BotonCalculadora";
import { useState } from "react";

const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState("0")
  const [numero, setNumero] = useState("0")


  const limpiar = () => {
    setNumero("0") 
    setNumeroAnterior("0")
  }

  const armarNumero = (numeroTexto: string) => {
    if(numero.includes(".") && numeroTexto === ".") return;
    if(numero.startsWith("0") || numero.startsWith("-0")){ 
      if(numeroTexto === "."){
        setNumero(numero + numeroTexto)
      } else if(numeroTexto === "0" && numero.includes(".")){
        setNumero(numero + numeroTexto)
      } else if(numeroTexto !== "0" && !numero.includes(".")){
        setNumero(numeroTexto)
      } else if(numeroTexto === "0" && !numero.includes(".")){
        return;
      } else if(numeroTexto === "0" && numero.includes("0")&& numero.includes(".")){
        return;
      }

    }else {
      setNumero(numero + numeroTexto)
    }
  }

  const positivoNegativo = ()=>{
    if(Number(numero) >= 0){
      setNumero("-" + numero)
    } else {
      setNumero(numero.replace("-", ""))
    }
  }

  const btnDelete = () => {
    const numerosSeparados = [numero].join("").length;
    const numeroNuevo = [numerosSeparados].splice(numerosSeparados, 1)
    console.log(numerosSeparados)
    console.log(numeroNuevo)
  }


  return (
    <View style={styles.calculadoraContainer} >
      {
        numeroAnterior != "0" && 
         <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      }
      <Text style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}
      </Text>

      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="C"  color="#9B9B9B" accion={limpiar}/>
        <BotonCalculadora texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalculadora texto="del" color="#9B9B9B" accion={btnDelete}/>
        <BotonCalculadora texto="/" color="orange"  accion={limpiar}/>
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="7" accion={armarNumero}/>
        <BotonCalculadora texto="8" accion={armarNumero}/>
        <BotonCalculadora texto="9" accion={armarNumero}/>
        <BotonCalculadora texto="X" color="orange" accion={limpiar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="4" accion={armarNumero}/>
        <BotonCalculadora texto="5" accion={armarNumero}/>
        <BotonCalculadora texto="6" accion={armarNumero}/>
        <BotonCalculadora texto="-" color="orange" accion={limpiar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="1" accion={armarNumero}/>
        <BotonCalculadora texto="2" accion={armarNumero}/>
        <BotonCalculadora texto="3" accion={armarNumero}/>
        <BotonCalculadora texto="+" color="orange" accion={limpiar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="0" ancho accion={armarNumero} />
        <BotonCalculadora texto="." accion={armarNumero}/>
        <BotonCalculadora texto="=" color="orange" accion={limpiar} />
      </View>

    </View>
  )
}
export default CalculadoraScreen