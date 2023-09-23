import React, {useState} from "react";

import { View, TextInput, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


export const TextInputScreens = () => {

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:""
  })

  const onChangeForm = (value: string, name: string)=>{
    setForm({...form, [name]: value})
  }


  return (
    <View style={styles.globalMargin} >
      <HeaderTitle title="TextInputs"/>
      <TextInput 
        style={style.input}
        placeholder="Ingrese su nombre"
        value={form.name}
        onChangeText={(value)=> onChangeForm(value, "name")}
        />
      <TextInput 
        style={style.input}
        placeholder="Ingrese su email"
        onChangeText={(value)=> onChangeForm(value, "email")}
        
        />
      <TextInput 
        style={style.input}
        placeholder="Ingrese su telefono"
        onChangeText={(value)=> onChangeForm(value, "phone")}
        keyboardType="phone-pad"
      />

    <HeaderTitle title={JSON.stringify(form, null, 3)}/>


    </View>
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