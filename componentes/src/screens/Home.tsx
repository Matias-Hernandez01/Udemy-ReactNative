import {View, FlatList, Text} from "react-native";


import Icon from "react-native-vector-icons/Ionicons";
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from "react-native-safe-area-context";


interface MenuItem {
  name: string,
  icon: string,
  components: string,
}

const menuItems = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    components: "Animation101Screens"
  },
  {
    name: "Animation 102",
    icon: "cellular-outline",
    components: "Animation102Screens"
  }
]


export const Home = () => {

  const {top} = useSafeAreaInsets()


  const renderMenuItems = (menuItem : MenuItem)=>{
    return (
      <View>
        <Text>{menuItem.name}-{menuItem.icon}</Text>
      </View>
      )
  } 

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
        renderItem={(item)=>renderMenuItems(item.item)}
        keyExtractor={(item)=>item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}