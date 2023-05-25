import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

import BusinessCard from '../components/BusinessCard'

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: BusinessCard, // business card scene trust
      }}
      style={{flex : 1}}
    />
  );
};

