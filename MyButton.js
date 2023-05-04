import React, { Component } from 'react';
import { ViroButton, ViroFlexView } from '@viro-community/react-viro';
import { Image } from 'react-native';

export default function MyButton(props) {
    return (
      <ViroButton
        onClick={props.onClick}
      >
        <ViroFlexView
          style={{
            backgroundColor: 'white',
            borderRadius: 50,
            width: 0.2,
            height: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={{uri : props.icon}}
            style={{ width: 50, height: 50 }}
          />
        </ViroFlexView>
      </ViroButton>
    );
}
