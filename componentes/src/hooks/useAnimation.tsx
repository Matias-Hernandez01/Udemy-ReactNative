import React, {useRef} from 'react';
import {View, Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(position, {
      toValue: -150,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const startPosition = (initPosition: number) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {opacity, position, fadeIn, fadeOut, startPosition};
};
