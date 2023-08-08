import {Text, TouchableOpacity, View} from "react-native";
import { styles } from "../theme/appTheme";

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer} >
      <Text style={styles.resultado}>1.500</Text>
      <Text style={styles.resultadoPequeno}>1.500</Text>
      <View style={styles.buttonsContainer} > 
        <View style={styles.button}>
           <Text style={styles.bottonTexto}>C</Text>
            </View>
        <View style={styles.button}>
           <Text style={styles.bottonTexto}>+/-</Text>
            </View>
        <View style={styles.button}> 
        <Text style={styles.bottonTexto}>%</Text>
         </View>
        <View style={styles.button}>
           <Text style={styles.bottonTexto}>÷</Text>
        </View>
      </View>

    </View>
  )
}
export default CalculadoraScreen