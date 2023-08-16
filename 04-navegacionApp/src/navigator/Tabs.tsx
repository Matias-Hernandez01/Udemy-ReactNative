import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, Platform} from 'react-native';

import {Tab1Screen} from '../screens/Tab1Screen';

import StackNavigator from './StackNavigator';
import {colors} from '../theme/appTheme';
import { TopTapNavigator } from '../navigator/TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabsAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={ true}
      barStyle={{
        backgroundColor:"#fdfd96"
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          if (focused) {
            return (
              <Text style={{color: 'red'}}>¡Hola!</Text>
            );
          } else {
            return <Text>T1</Text>;
          }
        },
      })}
    >
      <BottomTabsAndroid.Screen name="Tab1Screen" options={{title: 'Tag1'}} component={Tab1Screen}/>
      <BottomTabsAndroid.Screen name="Tab2Screen" options={{title: 'Tag2'}} component={TopTapNavigator}/>
      <BottomTabsAndroid.Screen name="StackNavigator" options={{title: 'Tag3'}} component={StackNavigator}/>
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabsIos = createBottomTabNavigator();

export const TabsIos = () => {
  return (
    <BottomTabsIos.Navigator
      sceneContainerStyle={{backgroundColor: '#b2dafa'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, size, focused}) => {
          console.log(route.name);
          if (focused) {
            return (
              <Text style={{color: 'red', fontSize: size + 2}}>¡Hola!</Text>
            );
          } else {
            return <Text>T1</Text>;
          }
        },
      })}>
      <BottomTabsIos.Screen
        name="Tab1Screen"
        options={{title: 'Tag1'}}
        component={Tab1Screen}
      />
      {/* <BottomTabsIos.Screen
        name="Tab2Screen"
        options={{title: 'Tag2'}}
        component={TopTapNavigator}
      /> */}
      <BottomTabsIos.Screen
        name="StackNavigator"
        options={{title: 'Tag3'}}
        component={StackNavigator}
      />
    </BottomTabsIos.Navigator>
  );
};
