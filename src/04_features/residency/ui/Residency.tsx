import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import {
  RadioButton,
  TRadioButtonStylesProps,
} from "@/src/06_shared/ui/radio-button"
import { FC } from "react"
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { TEXT } from "../config"
import { TResidency } from "../model/types"

type TStylesProps = TRadioButtonStylesProps & {
  title?: StyleProp<TextStyle>
  container?: StyleProp<ViewStyle>
  optionsWrapper?: StyleProp<ViewStyle>
  error?: StyleProp<TextStyle>
}

type TProps = {
  title: string
  value: TResidency
  onSelect: (value: TResidency) => void
  error?: string
  styles?: TStylesProps
}

export const Residency: FC<TProps> = ({
  title,
  value,
  onSelect,
  error,
  styles: customStyles = {},
}) => {
  const containerStyle = [styles.container, customStyles?.container]

  const titleStyle = [styles.title, customStyles?.title]

  const optionsWrapperStyle = [
    styles.optionsWrapper,
    customStyles?.optionsWrapper,
  ]

  const radioButtonStyles: TRadioButtonStylesProps = {
    radioButtonContainer: customStyles?.radioButtonContainer,
    radioButtonDot: customStyles?.radioButtonDot,
    radioButtonDotFilled: customStyles?.radioButtonDotFilled,
    radioButtonText: customStyles?.radioButtonText,
  }

  const errorStyle = [styles.error, customStyles?.error]

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={optionsWrapperStyle}>
        <RadioButton
          selected={value === "yes"}
          onPress={() => onSelect("yes")}
          text={TEXT.answers.yes}
          styles={radioButtonStyles}
        />
        <RadioButton
          selected={value === "no"}
          onPress={() => onSelect("no")}
          text={TEXT.answers.no}
          styles={radioButtonStyles}
        />
      </View>

      {error && <Text style={errorStyle}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.medium,
  },
  optionsWrapper: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  error: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.xsmall,
    color: COLORS.error,
    marginTop: 4,
  },
})
