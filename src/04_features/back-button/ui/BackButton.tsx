import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import Ionicons from "@expo/vector-icons/Ionicons"
import { FC } from "react"
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native"
import { useBackButton } from "../model/hooks"

type TStylesProps = {
  backButton?: StyleProp<ViewStyle>
  backButtonIcon?: StyleProp<TextStyle>
  backButtonText?: StyleProp<TextStyle>
}

type TProps = {
  iconColor?: string
  iconSize?: number
  text?: string
  isShowIcon?: boolean
  styles?: TStylesProps
}

export const BackButton: FC<TProps> = ({
  iconColor = COLORS.primary,
  iconSize = 24,
  text,
  isShowIcon = true,
  styles: customStyles = {},
}) => {
  const { canGoBack, handlePress } = useBackButton()

  if (!canGoBack) {
    return <></>
  }

  return (
    <Pressable
      onPress={handlePress}
      style={customStyles?.backButton}
    >
      {isShowIcon && (
        <Ionicons
          name='chevron-back'
          size={iconSize}
          color={iconColor}
          styles={customStyles?.backButtonIcon}
        />
      )}
      {text && (
        <Text style={[styles.text, customStyles?.backButtonText]}>{text}</Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: TEXT_SIZE.small,
    color: COLORS.black,
  },
})
