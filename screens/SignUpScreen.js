import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
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
                            backgroundColor: "#FBBF24",
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                        }}
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <Image source={require('../assets/images/signup.png')}
                        style={{ width: 165, height: 110 }} />
                </View>
            </SafeAreaView>
            <View style={{
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 32,
                backgroundColor: "#ffffff",
                flex: 1, 
                borderTopLeftRadius: 50, borderTopRightRadius: 50,
                marginTop : 16
            }}

            >
                <View>
                    <Text style={{
                        marginLeft: 16,
                        color: "#374151",
                    }}>Full Name</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: "#374151",
                            borderRadius: 16,
                        }}
                        value="john snow"
                        placeholder='Enter Name'
                    />
                    <Text style={{
                        marginLeft: 16,
                        color: "#374151",
                        marginTop: 8
                    }}>Email Address</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: "#374151",
                            borderRadius: 16,
                        }}
                        value="john@gmail.com"
                        placeholder='Enter Email'
                    />
                    <Text style={{
                        marginLeft: 16,
                        color: "#374151",
                        marginTop: 8
                    }}>Password</Text>
                    <TextInput
                        style={{
                            padding: 16,
                            marginBottom: 12,
                            backgroundColor: "#F3F4F6",
                            color: "#374151",
                            borderRadius: 16,
                        }}
                        secureTextEntry
                        value="test12345"
                        placeholder='Enter Password'
                    />
                    <TouchableOpacity
                        style={{
                            paddingTop: 12,
                            paddingBottom: 12,
                            backgroundColor: "#FBBF24",
                            borderRadius: 12,
                        }}
                    >
                        <Text style={{
                            color: "#374151",
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
                            color: "#F59E0B",
                            fontWeight: "600",
                        }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
