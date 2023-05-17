import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { ArrowRightOnRectangleIcon, CameraIcon } from 'react-native-heroicons/solid'

export default function HomeScreen(props) {
  const navigation = useNavigation()
  const name = props.name ?? "Mauricio"
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.flex} >
        <View style={styles.rowEnd}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.logout}>
            <ArrowRightOnRectangleIcon size="24" color={themeColors.crema} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={[styles.containerX]}>
          <Text style={styles.text}>{"Welcome, " + name}</Text>
          <View style={styles.imgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ARScene')}
            style={styles.camera}>
            <CameraIcon size="128" color={themeColors.accentSub} />
          </TouchableOpacity>
          </View>
          <View style={{
          marginTop: 28,
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <Text style={{
            color: themeColors.crema,
            fontWeight: "600",
          }}>
            Learn more about
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{
              color: themeColors.accent,
              fontWeight: "600",
            }}> your profile</Text>
          </TouchableOpacity>
        </View>          
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
    margin : 12,
    justifyContent : "space-around"
  },
  logout: {
    padding: 4,
    marginRight: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  camera : {
    padding : 28,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: themeColors.accent,
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  flex: {
    display: "flex",
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  imgContainer : {
      flexDirection : "row",
      justifyContent : "center"
  },
});
