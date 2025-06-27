import { useNavigation } from "expo-router"

export const useBackButton = () => {
  const navigation = useNavigation()

  const canGoBack = navigation.canGoBack()

  const handlePress = () => {
    if (canGoBack) {
      navigation.goBack()
    }
  }

  return { handlePress, canGoBack }
}
