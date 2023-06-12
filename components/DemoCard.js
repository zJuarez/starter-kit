import React from 'react';
import {
    ViroText,
    ViroImage,
    ViroFlexView,
} from '@viro-community/react-viro';

// card with title, image and text in 2d modeled in 3d.
export default function DemoCard(props) {
    const demoText = props.demoText
    return (
        <ViroFlexView borderRadius={30} width={2.1} position={[0, -5, 0]} rotation={[-90, 0, 0]} height={3} backgroundColor={'pink'} style={{ flexDirection: 'column', borderRadius : 25 }} >
            <ViroFlexView backgroundColor={'#092336'} style={{ flex: 0.1, flexDirection: 'row' }} >
                <ViroFlexView backgroundColor={'#092336'} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <ViroText
                        style={{ flex: 1, color: 'white', marginLeft: .1, fontWeight : 'bold'}}
                        text={'Tech People'}
                        fontSize={16} />
                </ViroFlexView>
            </ViroFlexView>
            <ViroFlexView backgroundColor={'white'} style={{ flex: 0.6 }} >
                <ViroImage borderRadius={30} style={{ flex: 1 }} source={require('../assets/images/oscuro.png')} />
            </ViroFlexView>
            <ViroFlexView backgroundColor={'#239bac'} style={{ flex: 0.3, flexDirection: 'column' }} >
                <ViroText
                    style={{ flex: 0.3, color: 'white', marginLeft: .2 }}
                    text={'Demo'}
                    fontSize={16} />
                <ViroText
                    style={{ flex: 0.7, color: 'white', marginLeft: .2 }}
                    text={demoText}
                    fontSize={14} />
            </ViroFlexView>
        </ViroFlexView>
    );
}