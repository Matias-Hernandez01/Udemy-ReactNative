import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Text} from "react-native";
import { colors } from '../theme/appTheme';
import StackNavigator from './StackNavigator';
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";


const Tab = createBottomTabNavigator();

export const Tabs =() => {
  return (
    <Tab.Navigator 
    sceneContainerStyle={{backgroundColor:"#b2dafa"}}
      tabBarOptions={{
       tabBarActiveTintColor: colors.primary,
       tabBarStyle:{
        borderTopColor:colors.primary,
        elevation:0
       },
       tabBarLabelStyle:{
        fontSize:15,
       },
      }}
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color, size, focused})=>{
          console.log(route.name)
          if(focused){
            return <Text style={{color:"red", fontSize:size + 2}} >Hello !</Text>
          } else{
            return (
             <Text>T1</Text>
          )}
          }

      }) }
    >
      {/* <Tab.Screen name="Tab1Screen"  options={{title:"Tag1", tabBarIcon:(props)=><Text style={{color: props.color}} >T1</Text>}}  component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen"  options={{title:"Tag1"}}  component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen"  options={{title:"Tag2"}}  component={Tab2Screen} />
      <Tab.Screen name="StackNavigator"  options={{title:"Tag3"}}  component={StackNavigator} />
    </Tab.Navigator>
  );
}