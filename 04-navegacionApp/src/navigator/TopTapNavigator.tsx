import { Text } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { ChatScreen } from "../screens/ChatScreen"
import { ContactScreen } from "../screens/ContactScreen"
import { AlbumsScreen } from "../screens/AlbumsScreen"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors, styles } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator()

export const TopTapNavigator = () => {

  const {top} = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{
        paddingTop:top
      }}
      sceneContainerStyle={{
        backgroundColor:"white"
      }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarIcon:({color, focused}) => {
          let iconName: string ="";  
          switch(route.name){
              case "Chat":
                iconName = "Ch"
              break;

              case "Contact":
                iconName = "Co"
              break;

              case "Albums":
                iconName = "Al"
              break;
            }
          return <Text style={{color}}>{iconName}</Text>
        },
      })}
      
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  )
}