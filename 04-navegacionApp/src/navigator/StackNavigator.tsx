import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams ={
  Pagina1Screen:undefined;
  Pagina2Screen:undefined;
  Pagina3Screen:undefined;
  PersonaScreen:{id: number, name: string, lastName: string, age:number} ;
}

const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
    // initialRouteName="pagina2Screen"
    screenOptions={{
      headerStyle:{
        elevation:0,
        backgroundColor:"#d8f8e1"
      },
      cardStyle:{
        backgroundColor:"#d8f8e1"
      }
    }}
    >
      <Stack.Screen  name="Pagina1Screen" options={{title:"Página1"}}  component={Pagina1Screen} />
      <Stack.Screen  name="Pagina2Screen" options={{title:"Página2"}}  component={Pagina2Screen} />
      <Stack.Screen  name="Pagina3Screen" options={{title:"Página3"}}  component={Pagina3Screen} />
      <Stack.Screen  name="PersonaScreen" options={{title:"Persona"}}  component={PersonaScreen} />
    </Stack.Navigator>
  )
}
export default StackNavigator