import React from "react";
// import HolaMundoScreen from "./src/screens/HolaMundoScreen";
// import { CounterScreen } from "./src/screens/CounterScreen";
// import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
// import { DimensionesScreen } from "./src/screens/DimensionesScreen";
// import { PositionScreen } from "./src/screens/PositionScreen";
// import { FlexScreen } from "./src/screens/FlexScreen";
import { SafeAreaView, Text } from "react-native";
import { TareaScreen } from "./src/screens/TareaScreen";

export const App = () => {
  return( 
    <SafeAreaView style={{flex:1}}>
      <TareaScreen />
    </SafeAreaView>
  )
}


