import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';

//GoogleSignin.configure({
//  webClientId:
//    '804315558824-82fsnnqs3gevbdq8naitec859qdeqjs5.apps.googleusercontent.com',
//  offlineAccess: true,
//});

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredentials);
    } catch (error) {
      const msg = error.message;
      console.log('Sign In With Google Error : ', msg);
      Alert.alert('Sign In With Google Error : ', msg);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
      }
    }
  };
  const isGoogleWorking = false

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: themeColors.bg}]}>
      <View style={[styles.containerX]}>
        <Text style={styles.text}>Tech People</Text>
        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/images/claroS.png')}
            style={styles.image}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.button}>
            <Text style={[styles.buttonText]}>Sign Up</Text>
          </TouchableOpacity>
          {isGoogleWorking && <TouchableOpacity
            onPress={() => signInGoogle()}
            style={[styles.button, {backgroundColor: themeColors.crema}]}>
            <View
              style={{
                marginHorizontal: 12,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/google.png')}
                style={{
                  width: 28,
                  height: 28,
                  marginRight: 8,
                }}
              />
              <Text style={[styles.buttonText]}>Sign In with Google</Text>
            </View>
          </TouchableOpacity>}
          <View style={styles.link}>
            <Text style={[styles.textWhite, styles.fontSemibold]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.fontSemibold, styles.textYellow400]}>
                {' '}
                Log In
              </Text>
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
    marginVertical: 16,
    justifyContent: 'space-around',
  },
  text: {
    color: themeColors.crema,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  button: {
    paddingVertical: 12,
    marginHorizontal: 32,
    marginVertical: 12,
    backgroundColor: themeColors.accent,
    borderRadius: 12,
  },
  buttonText: {
    color: themeColors.darkGray,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  spaceY4: {
    marginTop: 16,
  },
  textWhite: {
    color: 'white',
  },
  fontSemibold: {
    fontWeight: '700',
  },
  textYellow400: {
    color: themeColors.accent,
  },
});
