import { COLORS } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect, useRef } from "react"
import { Animated, StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const [loaded, error] = useFonts({
    [FONT_FAMILY.montserrat_regular]: require("../assets/fonts/Montserrat-Regular.ttf"),
    [FONT_FAMILY.montserrat_bold]: require("../assets/fonts/Montserrat-Bold.ttf"),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().then(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start()
      })
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <Animated.View style={styles.animatedContainer}>
        <SafeAreaView style={styles.saveArea}>
          <Stack>
            <Stack.Screen
              name='(tabs)'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='create-wallet'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='create-wallet-with-react-hook-form'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='privacy'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='terms'
              options={{ headerShown: false }}
            />
          </Stack>
        </SafeAreaView>
      </Animated.View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
  },
  saveArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})
