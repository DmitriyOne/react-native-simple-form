import Ionicons from "@expo/vector-icons/Ionicons"
import { FC, PropsWithChildren } from "react"
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"
import { EPosition } from "../../model/enum"

type TIconColors = {
  active: string
  inactive: string
}

type TStylesProps = {
  checkboxContainer?: StyleProp<ViewStyle>
  checkboxText?: StyleProp<TextStyle>
  checkboxIcon?: StyleProp<TextStyle>
}

type TProps = PropsWithChildren & {
  accessibilityLabel?: string
  checked: boolean
  onPress: () => void
  childrenPosition?: Extract<EPosition, "left" | "right">
  styles?: TStylesProps
  iconSize?: number
  iconColors?: TIconColors
}

export const Checkbox: FC<TProps> = ({
  accessibilityLabel,
  onPress,
  checked,
  childrenPosition = "right",
  styles: customStyles = {},
  iconSize = 24,
  iconColors = { active: COLORS.primary, inactive: COLORS.black },
  children,
}) => {
  const containerStyle = [styles.container, customStyles?.checkboxContainer]

  const textStyle = [
    styles.text,
    childrenPosition === "left" ? { marginRight: 8 } : { marginLeft: 8 },
    customStyles?.checkboxText,
  ]

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole='checkbox'
      accessibilityState={{ checked }}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={containerStyle}>
        {children && childrenPosition === "left" && (
          <Text style={textStyle}>{children}</Text>
        )}
        <Ionicons
          name={checked ? "checkbox" : "checkbox-outline"}
          size={iconSize}
          color={checked ? iconColors.active : iconColors.inactive}
          style={customStyles?.checkboxIcon}
        />
        {children && childrenPosition === "right" && (
          <Text style={textStyle}>{children}</Text>
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: TEXT_SIZE.small,
    fontFamily: FONT_FAMILY.montserrat_regular,
  },
})
