import React from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';

import { SettingsScreens } from "../screens/SettingsScreens";
import StackNavigator from './StackNavigator';
import logo from "../../images/logo.jpeg";
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const MenuLateral = ()=>{  
  

  return (
    <Drawer.Navigator
    drawerContent={(props) =><MenuInterno  {...props} />  }
>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Setting" component={SettingsScreens} />
    </Drawer.Navigator>

  )
}


const MenuInterno = ({navigation}:DrawerContentComponentProps)=>{

  return <DrawerContentScrollView style={styles.drawerContainer}  >
    <View style={{alignItems:"center"}} >
      <Image source={logo} style={styles.logo} />
    </View>

        {/* Opciones de navegación */}
    <View style={styles.menuContainer} >
      <TouchableOpacity onPress={()=>{navigation.navigate("StackNavigator")}}  >
        <Text style={styles.options}>Navegación</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Setting")}}  >
        <Text style={styles.options}>Ajustes</Text>
      </TouchableOpacity>
    </View>



  </DrawerContentScrollView>
}


const styles = StyleSheet.create({
  drawerContainer:{
    backgroundColor:"#84b6f4"
  },
  logo:{
    width:"70%",
    height:200,
    marginTop:20,
    borderRadius:170
  },
  menuContainer:{
    height:300,
    alignItems:"center",
    marginVertical:30,
    justifyContent:"flex-start"
  },
  options:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:10,
    color:"#e4fbfb",
  }
});