import {Text, View} from "react-native";
import { styles } from "../theme/appTheme";
import BotonCalculadora from '../components/BotonCalculadora';
import { useCalculadora } from "../hooks/useCalculadora";


const CalculadoraScreen = () => {
  const {numero, 
    numeroAnterior,
    armarNumero,
    calcular,
    limpiar,
    positivoNegativo,
    btnDelete,
    botonDividir,
    botonSumar,
    botonRestar,
    botonMultiplicar
  } = useCalculadora();

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
        <BotonCalculadora texto="/" color="orange"  accion={botonDividir}/>
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="7" accion={armarNumero}/>
        <BotonCalculadora texto="8" accion={armarNumero}/>
        <BotonCalculadora texto="9" accion={armarNumero}/>
        <BotonCalculadora texto="X" color="orange" accion={botonMultiplicar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="4" accion={armarNumero}/>
        <BotonCalculadora texto="5" accion={armarNumero}/>
        <BotonCalculadora texto="6" accion={armarNumero}/>
        <BotonCalculadora texto="-" color="orange" accion={botonRestar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="1" accion={armarNumero}/>
        <BotonCalculadora texto="2" accion={armarNumero}/>
        <BotonCalculadora texto="3" accion={armarNumero}/>
        <BotonCalculadora texto="+" color="orange" accion={botonSumar} />
      </View>
      <View style={styles.buttonsContainer} > 
        <BotonCalculadora texto="0" ancho accion={armarNumero} />
        <BotonCalculadora texto="." accion={armarNumero}/>
        <BotonCalculadora texto="=" color="orange" accion={calcular} />
      </View>

    </View>
  )
}
export default CalculadoraScreen