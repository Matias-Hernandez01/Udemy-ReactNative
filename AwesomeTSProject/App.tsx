import React from "react";
import CalculadoraScreen from "./src/screens/CalculadoraScreen";
import { styles } from './src/theme/appTheme';
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo} >
      <StatusBar backgroundColor="black" />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App