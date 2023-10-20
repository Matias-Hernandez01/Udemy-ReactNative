import React, {useState} from 'react';
import {
  View,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../images/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../images/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../images/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          padding: 40,
        }}>
        <Image
          source={item.img}
          style={{width: 400, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
        <Text></Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 30}}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: '#5856D6',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#5856D6',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
  },
});
