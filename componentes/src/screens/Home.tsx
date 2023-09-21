import {View, FlatList, Text} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from "../components/FlatListMenuItem";


const menuItems : MenuItem[] = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screens"
  },
  {
    name: "Animation 102",
    icon: "cellular-outline",
    component: "Animation102Screens"
  }
]


export const Home = () => {

  const {top} = useSafeAreaInsets()

  const renderListHeader = ()=>{
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}} >
        <Text style={styles.title} >Opciones de menú</Text>
      </View>
    )
  }

  const itemSeparator = ()=>{
    return (
      <View 
        style={{
          backgroundColor:"black",
           borderBottomWidth: 1,
           opacity: 0.4,
           marginVertical:8
        }}
      />
    )
  }


  return (
    <View style={{flex:1, ...styles.globalMargin}} >
      <FlatList 
        data={menuItems}
        renderItem={(item)=> <FlatListMenuItem menuItem={item.item} />}
        keyExtractor={(item)=>item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}