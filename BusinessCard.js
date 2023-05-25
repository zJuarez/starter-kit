import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';
// import firebaseConfig from './firebaseconfig';
// import {collection, addDoc, getDocs, where, query} from 'firebase/firestore'; // import collection and addDoc functions from Firestore
import { StyleSheet, Linking } from 'react-native';
// TODO instead use get instead of local import. use only for testing
import people from './people';
import DemoCard from './DemoCard';
import useAuth from './hooks/useAuth';
import { auth } from './firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';

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
  ViroQuad,
  ViroButton
} from '@viro-community/react-viro';

class BusinessCard extends Component {
  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    peopleObjTargets: {},
    entryTargets: {},
    realTargets: {},
    ready: false,
    activeKey: null,
    uid: null,
  };
  componentDidMount() {
    onAuthStateChanged(auth, user => {
      this.get(user.uid);
      this.setState({ uid: user.uid })
    });

    console.log('Get');
  }

  get = async uid => {
    entriesLocal = {};
    try {
      console.log('got user form ar: ', uid);
      const querySnapshot = await firestore()
        .collection('entries')
        .where('user_id', '==', uid)
        .get();
      const entryTargets = {};
      querySnapshot.forEach(documentSnapshot => {
        entryTargets[documentSnapshot.id] = documentSnapshot.data();
      });
      const parseInteger = num => {
        let str = num.toString();
        str = str.padStart(3, '0');
        return str;
      };
      this.setState({ entryTargets }, () => {
        for (const [key, value] of Object.entries(this.state.entryTargets)) {
          entriesLocal[key] = {
            source: {
              uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${parseInteger(
                value.pokemon,
              )}.png`,
            },
            orientation: 'Up',
            physicalWidth: 0.1, // width in meters,
            data: { text: value.text, pokemon: value.pokemon },
            type: 'Image',
          };
        }

        this.setState({
          realTargets: entriesLocal,
        });

        console.log('Entries Local', entriesLocal);
        ViroARTrackingTargets.createTargets(entriesLocal);
        this.setState({
          ready: true,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  getNoTrackingUI() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={initialized ? 'Initializing AR...' : 'No Tracking'} />
    );
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroButton
          source={require("./assets/images/refresh.png")}
          position={[-0.75, -8, -5]}
          height={1}
          width={1}
          rotation={[-90, 0, 0]}
          onClick={() => this.get(this.state.uid)}
        />
        {Object.keys(this.state.realTargets).map((key, index) => {
          return (
            <ViroARImageMarker
              target={key}
              key={index}
              onAnchorUpdated={e => {
                // change active key when a new target is found
                if (
                  this.state.activeKey !== key &&
                  e.trackingMethod === 'tracking'
                ) {
                  console.log(
                    'Anchor found ' + this.state.realTargets[key].data.pokemon,
                  );
                  // show info from key
                  this.setState({
                    activeKey: key,
                  });
                }
              }}>
              {this.state.activeKey === key && (
                <ViroNode>
                  <DemoCard demoText={this.state.realTargets[key].data.text} />
                </ViroNode>
              )}
            </ViroARImageMarker>
          );
        })}
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      //
    } else {
      //
    }
  };
}

var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 50,
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
    flex: 0.5,
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5,
  },
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: 'rgba(255,255,255,1)',
  },
  quad: {
    diffuseColor: 'rgba(0,0,0,0.5)',
  },
});

ViroAnimations.registerAnimations({
  animateImage: {
    properties: {
      positionX: 0.05,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 500,
  },
});

export default BusinessCard;
