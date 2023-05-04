import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import {
    ViroText,
    ViroImage,
    ViroFlexView,
    ViroNode
} from '@viro-community/react-viro';
import MyButton from './MyButton';

export default function BusinessCardNode(props) {
    const person = props.person
    const height = 0.0520
    const width = 0.0375

    const testContent = <ViroFlexView
        width={width}
        height={height}
        rotation={[-90, 0, 0]} 
        style={{
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#00ff00',
            padding: .1,
            flex: 1,
        }}>
        <ViroText
                text={person['data']['name']}
                scale={[.015, .015, .015]}
                style={{ ...styles.textStyle }}
            />
        <ViroText
                text={person['data']['role']}
                scale={[.015, .015, .015]}
                style={{ ...styles.textStyle }}
            />
    </ViroFlexView>

    const realContent = <ViroFlexView
        rotation={[-90, 0, 0]}
        height={height}
        width={width}
        style={{ flexDirection: 'column', padding: 0.1, ...styles.card }}
    >
        <ViroFlexView
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
            <ViroText
                textClipMode="None"
                text={person['data']['name']}
                scale={[.015, .015, .015]}
                style={{ ...styles.textStyle }}
            />
            <ViroText
                textClipMode="None"
                text={"100 HP"} // vida?
                scale={[.015, .015, .015]}
                style={{ ...styles.textStyle }}
            />
        </ViroFlexView>
        <ViroImage
            height={0.0255}
            width={0.0342}
            style={styles.imagePerson}
            source={{ uri: person['data']['image'] }}
        />
        <ViroText
            width={0.0342}
            height={0.021}
            textAlign="center"
            textClipMode="None"
            text={person['data']['role']}
            scale={[.01, .01, .01]}
            style={{ ...styles.textStyle, color: "#284B5E" }}
        />
        <ViroText
            textAlign="left"
            textClipMode="None"
            text={'Contacto'}
            scale={[.01, .01, .01]}
            style={styles.textStyle}
        />
        <ViroFlexView style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <MyButton icon='icons/wa.png' onClick={() => { }} />
            <MyButton icon='icons/phone.png' onClick={() => { }} />
            <MyButton icon='icons/mail.png' onClick={() => { }} />
        </ViroFlexView>
        <ViroText
            textAlign="left"
            textClipMode="None"
            text={'Social'}
            scale={[.01, .01, .01]}
            style={styles.textStyle}
        />
        <ViroFlexView style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <MyButton icon='icons/fb.png' onClick={() => { }} />
            <MyButton icon='icons/linkedin.png' onClick={() => { }} />
        </ViroFlexView>
        <ViroText
            textAlign="left"
            textClipMode="None"
            text={'Empresa'}
            scale={[.01, .01, .01]}
            style={styles.textStyle}
        />
        <ViroFlexView style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <MyButton icon='icons/people.png' onClick={() => { }} />
        </ViroFlexView>
    </ViroFlexView>

    return (
        <ViroNode key={person['data']['name']}>
            <ViroNode>
                {testContent}
            </ViroNode>
        </ViroNode>
    )
}

var styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#4476BA',
        borderColor: '#0B0628',
        borderWidth: 5,
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
    },
    imagePerson: {
        borderColor: '#FFD700',
        borderWidth: 3
    }
});
