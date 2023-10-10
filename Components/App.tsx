// import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';


const App = () => {

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  
});

export default App;
