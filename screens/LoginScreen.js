import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseconfig'

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const socials = false
  const onPrimaryButtonPress = async () => {
    if(email && password){
     try{
         await signInWithEmailAndPassword(auth, email, password)
     }catch(err){
         console.log("Log In Failed! ", err.message)
         Alert.alert("Log In Failed! ", err.message)
     }
    }else{
     const msg = "All fields required"
     console.log(msg)
     Alert.alert(msg)
    }
 }
  return (
    <View style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.flex} >
        <View style={styles.rowStart}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.back}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowCenter}>
          <Image source={require('../assets/images/crema.png')}
            style={{ width: 200, height: 200 }} />
        </View>

      </SafeAreaView>
      <View
        style={[styles.view, { borderTopLeftRadius: 50, borderTopRightRadius: 50 }]} >
        <View className="form space-y-2">
          <Text style={[styles.text, styles.mt8]}>Email Address</Text>
          <TextInput
            style={{
              padding: 16,
              marginBottom: 12,
              backgroundColor: "#F3F4F6",
              color: themeColors.darkGray,
              borderRadius: 16,
            }}
            placeholder="email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Text style={[styles.text, styles.mt8]} >Password</Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: "#F3F4F6",
              color: themeColors.darkGray,
              borderRadius: 16,
              marginTop: 8
            }}
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: 8
          }}>
            <Text style={{
              marginBottom: 20,
              color: themeColors.darkGray,
            }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPrimaryButtonPress}
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: themeColors.accent,
              borderRadius: 12,
              marginTop: 8
            }}>
            <Text
              style={{
                color: themeColors.darkGray,
                fontSize: 20,
                lineHeight: 28,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

        </View>
        {socials &&  <> <Text style={{
          paddingTop: 20,
          paddingBottom: 20,
          color: themeColors.darkGray,
          fontSize: 20,
          lineHeight: 28,
          fontWeight: "700",
          textAlign: "center",
        }}>Or</Text>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <TouchableOpacity style={{
            padding: 8,
            backgroundColor: "#F3F4F6",
            borderRadius: 16,
            marginLeft: 48
          }}>
            <Image source={require('../assets/icons/google.png')} style={{
              width: 40,
              height: 40,
            }} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 8,
            backgroundColor: "#F3F4F6",
            borderRadius: 16,
            marginLeft: 48
          }}>
            <Image source={require('../assets/icons/apple.png')} style={{
              width: 40,
              height: 40,
            }} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 8,
            backgroundColor: "#F3F4F6",
            borderRadius: 16,
            marginLeft: 48
          }}>
            <Image source={require('../assets/icons/facebook.png')} style={{
              width: 40,
              height: 40,
            }} />
          </TouchableOpacity>
        </View> </>}
        
        <View style={{
          marginTop: 28,
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <Text style={{
            color: "#6B7280",
            fontWeight: "600",
          }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{
              color: themeColors.accentSub,
              fontWeight: "600",
            }}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center"
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  flex: {
    display: "flex",
  },
  back: {
    padding: 8,
    marginLeft: 16,
    backgroundColor: themeColors.accent,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  view: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    backgroundColor: "#ffffff",
    marginTop: 20,
    flex : 1
  },
  mt8: {
    marginTop: 8
  },
  text: {
    marginLeft: 16,
    color: themeColors.darkGray,
  }
});
