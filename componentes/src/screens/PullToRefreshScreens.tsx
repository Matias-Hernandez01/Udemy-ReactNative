import { View, Text,ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';


export const PullToRefreshScreens = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = ()=>{
    setRefreshing(true)
    setTimeout(()=>{
      console.log("terminamos")
      setRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.globalMargin} >
        <HeaderTitle title="Pull To Refresh"/>
      </View>
    </ScrollView>
  )
}