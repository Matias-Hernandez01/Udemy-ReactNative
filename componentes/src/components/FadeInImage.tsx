import React from 'react';

import {View, Animated} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
}

const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  return (
    <Animated.Image
      source={{uri}}
      onLoadEnd={() => fadeIn(1000)}
      style={{
        width: '100%',
        height: 400,
        opacity,
      }}
    />
  );
};
export default FadeInImage;
