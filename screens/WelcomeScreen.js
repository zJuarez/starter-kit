import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

  export default function WelcomeScreen() {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: themeColors.bg }]}>
        <View style={[styles.containerX]}>
          <Text style={styles.text}>Tech People</Text>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/claroS.png')}
              style={styles.image}
            />
          </View>
          <View >
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={styles.button}
            >
              <Text style={[styles.buttonText]}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <View style={styles.link}>
              <Text style={[styles.textWhite, styles.fontSemibold]}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.fontSemibold, styles.textYellow400]}> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerX: {
      flex: 1,
      backgroundColor: themeColors.bg,
      marginVertical : 16,
      justifyContent : "space-around"
    },
    text: {
      color: themeColors.crema,
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    },
    imgContainer : {
        flexDirection : "row",
        justifyContent : "center"
    },
    image: {
      width: 275,
      height: 275,
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        marginLeft: 28,
        marginRight: 28,
        backgroundColor: themeColors.accent,
        borderRadius: 12,        
    },
    buttonText: {
        color: themeColors.darkGray,
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "700",
        textAlign: "center",        
    },
    linkText: {
      color: 'white',
      fontWeight: 'bold',
    },
    link: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop : 16,
    },
    spaceY4: {
        marginTop : 16
    },
    textWhite: {
        color : "white"
    },
    fontSemibold : {
        fontWeight : "700"
    },
    textYellow400 : {
        color: themeColors.accent,
    }
  });
