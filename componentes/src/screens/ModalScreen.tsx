import React from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from 'react';

export const ModalScreen = () => {

  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen"/>

     <Button 
        title="Open Modal"
        onPress={()=>setIsDisabled(true)}
      />

      <Modal 
        animationType='fade'
        visible={isDisabled}
        transparent={true}
      >
      <View style={{
        flex:1,
        // width:100,
        // height:100,
        backgroundColor:"rgba(0,0,0,0.3)",
        alignItems:"center",
        justifyContent:"center"
      }}
      >
            <View style={{alignItems:"center"}} >
              <HeaderTitle title="Modal"/>
            </View>
            <Text style={{color: "black", textAlign:"center"}} >Modal body</Text>
            <Button title="Close Modal" onPress={()=>setIsDisabled(false)} />



      </View>
      
      </Modal>
    </View>
  )
}