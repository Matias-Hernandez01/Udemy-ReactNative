import {View, FlatList, Text} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from "../components/FlatListMenuItem";
import {menuItems} from "../data/menuItems";
import { HeaderTitle } from "../components/HeaderTitle";


export const Home = () => {

  const itemSeparator = ()=>{
    return (
      <View 
        style={{
          backgroundColor:"#5856D6",
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
        ListHeaderComponent={< HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}