import { SectionList, Text, View } from "react-native"
import { HeaderTitle } from "../components/HeaderTitle"
import { styles } from "../theme/appTheme"


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
  }
];


export const SectionListScreens = () => {
  return (
    <View style={{...styles.globalMargin,flex:1}} >
      {/* <HeaderTitle title="Section List"/>   */}
      <SectionList 
          sections={casas}
          renderItem={(item)=>(<Text style={styles.item} >{item.item}</Text>)}
          keyExtractor={(item, index)=> item + index}
          ListHeaderComponent={()=><HeaderTitle title="Section List"/>}
          renderSectionHeader={({section: { casa }})=> (
            <View style={{backgroundColor:"white"}} > 
              <HeaderTitle title={casa} /> 
            </View>
          )}
          renderSectionFooter={()=> <HeaderTitle title={`Total: ${casas.length}`} />}
          showsVerticalScrollIndicator={false}
      />
    </View>
  )
}