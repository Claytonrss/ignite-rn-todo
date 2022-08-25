import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor="#0D0D0D"
          translucent
        />
        <Home />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
