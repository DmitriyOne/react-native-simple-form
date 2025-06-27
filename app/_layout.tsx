import { COLORS } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    [FONT_FAMILY.montserrat_regular]: require("../assets/fonts/Montserrat-Regular.ttf"),
    [FONT_FAMILY.montserrat_bold]: require("../assets/fonts/Montserrat-Bold.ttf"),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.saveArea}>
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='form'
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})
