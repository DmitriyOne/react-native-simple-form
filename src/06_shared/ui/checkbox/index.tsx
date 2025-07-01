import MaterialIcons from "@expo/vector-icons/MaterialIcons"
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
import { isValidArray } from "../../model/utils"

type TIconColors = {
  active: string
  inactive: string
}

export type TCheckboxStylesProps = {
  container?: StyleProp<ViewStyle>
  contentWrapper?: StyleProp<ViewStyle>
  checkboxText?: StyleProp<TextStyle>
  checkboxIcon?: StyleProp<TextStyle>
  checkboxContent?: StyleProp<ViewStyle>
  error?: StyleProp<TextStyle>
}

export type TCheckboxProps = PropsWithChildren & {
  accessibilityLabel?: string
  checked: boolean
  onPress: () => void
  childrenPosition?: Extract<EPosition, "left" | "right">
  styles?: TCheckboxStylesProps
  iconSize?: number
  iconColors?: TIconColors
  errors?: string[]
}

export const Checkbox: FC<TCheckboxProps> = ({
  accessibilityLabel,
  onPress,
  checked,
  childrenPosition = "right",
  styles: customStyles = {},
  iconSize = 24,
  iconColors = { active: COLORS.primary, inactive: COLORS.black },
  errors,
  children,
}) => {
  const hasError = isValidArray(errors)

  const contentWrapperStyle = [
    styles.contentWrapper,
    customStyles?.contentWrapper,
  ]
  const contentStyle = [
    styles.checkboxContent,
    childrenPosition === "left" ? { marginRight: 8 } : { marginLeft: 8 },
    customStyles?.checkboxContent,
  ]
  const errorStyles = [styles.error, customStyles.error]

  return (
    <View style={customStyles?.container}>
      <Pressable
        onPress={onPress}
        accessibilityRole='checkbox'
        accessibilityState={{ checked }}
        accessibilityLabel={accessibilityLabel}
      >
        <View style={contentWrapperStyle}>
          {children && childrenPosition === "left" && (
            <View style={contentStyle}>{children}</View>
          )}
          <MaterialIcons
            name={checked ? "check-box" : "check-box-outline-blank"}
            size={iconSize}
            color={checked ? iconColors.active : iconColors.inactive}
            style={customStyles?.checkboxIcon}
          />
          {children && childrenPosition === "right" && (
            <View style={contentStyle}>{children}</View>
          )}
        </View>
      </Pressable>

      {hasError &&
        errors.map((error) => (
          <Text
            key={error}
            style={errorStyles}
          >
            {error}
          </Text>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContent: {
    flexDirection: "row",
  },
  text: {
    fontSize: TEXT_SIZE.small,
    fontFamily: FONT_FAMILY.montserrat_regular,
  },
  error: {
    color: COLORS.error,
    fontSize: TEXT_SIZE.xsmall,
  },
})
