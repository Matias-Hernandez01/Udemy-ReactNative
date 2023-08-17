import React,{useContext} from "react";
import {View, Text,Button} from "react-native"
import { styles } from "../theme/appTheme"
import { AuthContext, AuthState } from '../context/AuthContext';

export const ContactScreen = () => {

  const { signIn, authState } = useContext( AuthContext)

  return (
    <View style={styles.globalMargin} >
      <Text style={{fontSize:30}} >ContactScreen</Text>

      {
        !authState.isLoggedIn &&
        <Button title="signIn" onPress={signIn} />
      }
        
      
    </View>
  )
}