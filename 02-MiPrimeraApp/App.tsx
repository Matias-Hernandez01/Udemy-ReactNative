import React from "react";
// import HolaMundoScreen from "./src/screens/HolaMundoScreen";
// import { CounterScreen } from "./src/screens/CounterScreen";
// import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
// import { DimensionesScreen } from "./src/screens/DimensionesScreen";
// import { PositionScreen } from "./src/screens/PositionScreen";
import { SafeAreaView } from "react-native";
import { FlexScreen } from "./src/screens/FlexScreen";

export const App = () => {
  return( 
    <SafeAreaView style={{flex:1}}>
      <FlexScreen />
    </SafeAreaView>
  )
}


