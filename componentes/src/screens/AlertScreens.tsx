import { View, Button, Alert } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


export const AlertScreens = () => {

  const showAlert = ()=> {
    Alert.alert("Titulo", "Mensaje de alerta", [
      {
        text:"Cancel",
        onPress: () => console.log("Cancel Passed"),
        style:'destructive'
      },
      {
        text: "Ok", onPress:()=> console.log("Ok Pressed")
      }
    ],
      {cancelable: true}
    )
  }

  return (
    <View style={styles.globalMargin} >
      <HeaderTitle title="Alerts" />

      <Button  
        title="Mostrar alerta"
        onPress={ showAlert }
      />

    </View>
  )
}