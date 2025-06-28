import { FC } from "react"
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { BORDER_RADIUS, COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"
import { EPosition } from "../../model/enum"

export type TRadioButtonStylesProps = {
  radioButtonContainer?: StyleProp<ViewStyle>
  radioButtonDot?: StyleProp<ViewStyle>
  radioButtonDotFilled?: StyleProp<ViewStyle>
  radioButtonText?: StyleProp<TextStyle>
}

type TProps = {
  selected: boolean
  onPress: () => void
  text: string
  textPosition?: Extract<EPosition, "left" | "right">
  styles?: TRadioButtonStylesProps
}

export const RadioButton: FC<TProps> = ({
  selected,
  onPress,
  text,
  textPosition = "right",
  styles: customStyles = {},
}) => {
  const containerStyle = [styles.container, customStyles?.radioButtonContainer]

  const dotStyle = [
    styles.dot,
    { borderColor: selected ? COLORS.primary : COLORS.gray },
    customStyles?.radioButtonDot,
  ]

  const dotFilledStyle = [styles.dotFilled, customStyles?.radioButtonDotFilled]

  const textStyle = [
    styles.text,
    textPosition === "left" ? { marginRight: 8 } : { marginLeft: 8 },
    customStyles?.radioButtonText,
  ]

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole='radio'
      accessibilityState={{ checked: selected }}
      accessibilityLabel={text}
    >
      <View style={containerStyle}>
        {textPosition === "left" && <Text style={textStyle}>{text}</Text>}
        <View style={dotStyle}>
          {selected && <View style={dotFilledStyle} />}
        </View>
        {textPosition === "right" && <Text style={textStyle}>{text}</Text>}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dotFilled: {
    width: 12,
    height: 12,
    borderRadius: BORDER_RADIUS.large,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: TEXT_SIZE.medium,
    fontFamily: FONT_FAMILY.montserrat_regular,
  },
})
