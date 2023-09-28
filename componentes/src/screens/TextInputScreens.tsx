import React, {useState} from "react";

import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ScrollView } from "react-native-gesture-handler";
import { useForm } from "../hooks/useForm";
import { CumstomSwitch } from "../components/CumstomSwitch";


export const TextInputScreens = () => {

  const {onChange, form, isSuscribed} = useForm({
    name:"",
    email:"",
    phone:"",
    isSuscribed:false,
  });

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView>
      
    <View style={styles.globalMargin} >
      <HeaderTitle title="TextInputs"/>
      <HeaderTitle title={JSON.stringify(form, null, 3)}/>
      <Text>Suscribirme</Text>
      <CumstomSwitch 
        isOn={isSuscribed}
        onChange={(value)=> onChange( isSuscribed, "isSuscribed") }
      />
      <TextInput 
        style={style.input}
        placeholder="Ingrese su nombre"
        value="name"
        onChangeText={(value)=> onChange(value, "name")}
        />
      <TextInput 
        style={style.input}
        placeholder="Ingrese su email"
        onChangeText={(value)=> onChange(value, "email")}
        
        />
      <HeaderTitle title={JSON.stringify(form, null, 3)}/>
      <TextInput  
        style={style.input}
        placeholder="Ingrese su telefono"
        onChangeText={(value)=> onChange(value, "phone")}
        keyboardType="phone-pad"
        />
  
       </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  input:{
    borderWidth:2,
    borderRadius:10,
    paddingHorizontal:10,
    borderColor: "#5856D6",
    marginVertical:10,
  }

});