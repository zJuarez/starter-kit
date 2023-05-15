import React from 'react';
import {StyleSheet} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

import BusinessCard from './BusinessCard';

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: BusinessCard, // business card scene trust
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
