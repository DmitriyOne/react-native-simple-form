import { CREATE_WALLET_FORM_TEXT } from "@/src/05_entities/user/config"
import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { isValidArray } from "@/src/06_shared/model/utils"
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
  errors?: string[]
  styles?: TStylesProps
}

export const Residency: FC<TProps> = ({
  title,
  value,
  onSelect,
  errors,
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
          text={CREATE_WALLET_FORM_TEXT.answers_resident.yes}
          styles={radioButtonStyles}
        />
        <RadioButton
          selected={value === "no"}
          onPress={() => onSelect("no")}
          text={CREATE_WALLET_FORM_TEXT.answers_resident.no}
          styles={radioButtonStyles}
        />
      </View>

      {isValidArray(errors) &&
        errors.map((error) => (
          <Text
            key={error}
            style={errorStyle}
          >
            {error}
          </Text>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.medium,
    paddingBottom: 4,
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
