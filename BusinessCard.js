'use strict';

import React, { Component } from 'react';
import BusinessCardNode from './BusinessCardNode';
import {StyleSheet, Linking} from 'react-native';
// TODO instead use get instead of local import. use only for testing
import people from './people';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroTrackingStateConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from '@viro-community/react-viro';

class BusinessCard extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    peopleObjTargets: {}
  }

  componentDidMount() {

    const peopleObjTargetsLocal = {}

    // mapeo del objeto de la db a un target para viro
    people.forEach(person => {
      peopleObjTargetsLocal[person.id] = {
        source: {uri : person['target']},
        orientation: 'Up',
        physicalWidth: 0.05, // width in meters,
        data : person,
        type : 'Image',
      }
    })

    this.setState({peopleObjTargets : peopleObjTargetsLocal})
    ViroARTrackingTargets.createTargets(peopleObjTargetsLocal);

  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }

  getARScene() {
    return (
      <ViroNode>
        {Object.values(this.state.peopleObjTargets).map((person, index) => {
          return (
            <ViroARImageMarker target={person['data']['id']} key={index}
              onAnchorFound={
                () => this.setState({
                    runAnimation: true
                })}
            >
              <BusinessCardNode person={person}/>

            </ViroARImageMarker>)
        })}
    </ViroNode>
    )
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      isTracking: true
    } else  {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#4476BA',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  }
});

ViroAnimations.registerAnimations({
  animateImage:{
    properties:{
      positionX: 0.05,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing:"Bounce",
    duration: 500
  }
});

export default BusinessCard;