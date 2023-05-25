import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';
import DemoCard from './DemoCard';
import { auth } from '../firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
  ViroButton
} from '@viro-community/react-viro';

class ARScene extends Component {
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
      if(user){
        this.get(user.uid);
        this.setState({ uid: user.uid })
      }
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

  render() {
    return (
      <ViroARScene >
        <ViroButton
          source={require("../assets/images/refresh.png")}
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
}
export default ARScene;
