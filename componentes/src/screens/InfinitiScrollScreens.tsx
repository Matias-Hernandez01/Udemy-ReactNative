import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import FadeInImage from '../components/FadeInImage';

export const InfinitiScrollScreens = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/200/300`} />;
  };

  return (
    <View style={styless.mainContainer}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="IfiniteScroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styless = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b0c2f2',
  },
  textItem: {
    backgroundColor: '#84b6f4',
    height: 100,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
