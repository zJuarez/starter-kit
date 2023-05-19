import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateCurrentUser} from 'firebase/auth';
import {auth} from '../firebaseconfig'

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onPrimaryButtonPress = async () => {
       if(email && password && name){
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log("Sign Up Failed! ", err.message)
            Alert.alert("Sign Up Failed! ", err.message)
        }
       }else{
        const msg = "All fields required"
        console.log(msg)
        Alert.alert(msg)
       }
    }
    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <SafeAreaView style={{ display: "flex", }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            padding: 8,
                            marginLeft: 16,
                            backgroundColor: themeColors.accent,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                        }}
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center", paddingVertical: 12,
                }}>
                    <Image source={require('../assets/images/crema.png')}
                        style={{ width: 165, height: 130 }} />
                </View>
            </SafeAreaView>
            <View style={{
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 32,
                backgroundColor: "#ffffff",
                flex: 1,
                borderTopLeftRadius: 50, borderTopRightRadius: 50,
                marginTop: 8
            }}
            >
                <View>
                    <Text style={{
                        marginLeft: 16,
                        color: themeColors.darkGray,
                    }}>Full Name</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: themeColors.darkGray,
                            borderRadius: 16,
                        }}
                        value={name}
                        onChangeText={value => setName(value)}
                        placeholder='Enter Name'
                    />
                    <Text style={{
                        marginLeft: 16,
                        color: themeColors.darkGray,
                        marginTop: 8
                    }}>Email Address</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: themeColors.darkGray,
                            borderRadius: 16,
                        }}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Enter Email'
                    />
                    <Text style={{
                        marginLeft: 16,
                        color: themeColors.darkGray,
                        marginTop: 8
                    }}>Password</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: themeColors.darkGray,
                            borderRadius: 16,
                        }}
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                        placeholder='Enter Password'
                    />
                    <TouchableOpacity
                        style={{
                            paddingTop: 12,
                            paddingBottom: 12,
                            backgroundColor: themeColors.accent,
                            borderRadius: 12,
                            marginTop : 24
                        }}
                        onPress={onPrimaryButtonPress}
                    >
                        <Text style={{
                            color: themeColors.darkGray,
                            fontWeight: "700",
                            textAlign: "center",
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 28,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <Text style={{
                        color: "#6B7280",
                        fontWeight: "600",
                    }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{
                            color: themeColors.accentSub,
                            fontWeight: "600",
                        }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
