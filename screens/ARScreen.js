import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

import ARScene from '../components/ARScene'

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARScene, 
      }}
      style={{flex : 1}}
    />
  );
};

