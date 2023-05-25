import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen({ route }) {
    const navigation = useNavigation()
    const { user } = route.params
    const name = user.displayName ?? user.email
    const [documents, setDocuments] = useState([])
    const parseInteger = num => {
        let str = num.toString();
        str = str.padStart(3, '0');
        return str;
    };
    const get = async (uid) => {
        console.log('etting info for: ', uid);
        const querySnapshot = await firestore()
            .collection('entries')
            .where('user_id', '==', uid)
            .get();
        const myDocuments = [];
        querySnapshot.forEach(documentSnapshot => {
            myDocuments.push(documentSnapshot.data());
        });
        setDocuments(myDocuments)
        console.log(myDocuments)
    }

    const singleDocument = (document, i) => {
        return <View style={styles.singleDocument} key={i}>
            <View style={styles.rowCenter}> 
            <Image
                source={{
                    uri: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${parseInteger(
                        document.pokemon,
                    )}.png`
                }}
                style={styles.image}
            />
            </View>
            {document.text != null && <Text style={styles.subtext}>{document.text}</Text>}
        </View>
    }

    useEffect(async () => {
        // Run! Like go get some data from an API.
        if(user){
            await get(user.uid)
        }
    }, [user]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeColors.bg }]}>
            <SafeAreaView style={styles.flex}>
                <View style={styles.rowStart}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.back}>
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={[styles.containerX]}>
                <Text style={styles.text}>{name + "'s Documents"}</Text>
                <ScrollView>
                    {documents.map(singleDocument)}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerX: {
        flex: 1,
        backgroundColor: themeColors.bg,
        margin: 12,
        justifyContent: "space-around"
    },
    image: {
        width: 250,
        height: 250,
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "center"
    },
    singleDocument: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop : 16,
        padding: 16,
    },
    rowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    flex: {
        display: 'flex',
    },
    back: {
        padding: 8,
        marginLeft: 16,
        backgroundColor: themeColors.accent,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    text: {
        color: themeColors.crema,
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        paddingBottom: 12,
    },
    subtext: {
        color: themeColors.crema,
        fontSize: 18,
        textAlign: 'center',
    },
});
