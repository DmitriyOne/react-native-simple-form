import { ForwardedRef, forwardRef } from "react"
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { BORDER_RADIUS, COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"
import { EPosition } from "../../model/enum"

export type TInputStylesProps = {
  inputContainer?: StyleProp<ViewStyle>
  input?: StyleProp<TextStyle>
  error?: StyleProp<TextStyle>
  labelTop?: StyleProp<TextStyle>
  labelBottom?: StyleProp<TextStyle>
}

type TProps = Omit<TextInputProps, "value" | "onChangeText" | "style"> & {
  label: string
  value: string
  onChangeText: (v: string) => void
  style?: TInputStylesProps
  errors?: string[]
  labelPosition?: Extract<EPosition, "top" | "bottom">
}

export const Input = forwardRef<TextInput, TProps>(
  (
    {
      label,
      value,
      onChangeText,
      style: customStyles = {},
      errors,
      labelPosition = "top",
      ...props
    },
    ref: ForwardedRef<TextInput>,
  ) => {
    const hasError = !!(errors && errors.length > 0)

    const componentStyles = [
      styles.component,
      hasError && styles.componentError,
      customStyles?.inputContainer,
    ]

    const labelTopStyles = [
      styles.label,
      styles.labelTop,
      hasError && styles.labelError,
      customStyles?.labelTop,
    ]

    const labelBottomStyles = [
      styles.label,
      styles.labelBottom,
      hasError && styles.labelError,
      customStyles?.labelBottom,
    ]

    const inputStyles = [
      styles.input,
      hasError && styles.inputError,
      customStyles?.input,
    ]

    const errorStyles = [styles.error, customStyles?.error]

    return (
      <View style={componentStyles}>
        {labelPosition === "top" && <Text style={labelTopStyles}>{label}</Text>}

        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={props.placeholderTextColor ?? COLORS.gray}
          style={inputStyles}
          {...props}
        />

        {labelPosition === "bottom" && (
          <Text style={labelBottomStyles}>{label}</Text>
        )}

        {hasError &&
          errors.map((err) => (
            <Text
              key={err}
              style={errorStyles}
            >
              - {err}
            </Text>
          ))}
      </View>
    )
  },
)

Input.displayName = "Input"

const styles = StyleSheet.create({
  component: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  componentError: {
    marginBottom: 4,
  },
  input: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.medium,
    color: COLORS.black,
    backgroundColor: COLORS.secondary,
    borderRadius: BORDER_RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.transparent,
  },
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.error,
    color: COLORS.error,
  },
  label: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.medium,
    color: COLORS.black,
  },
  labelTop: {
    paddingBottom: 6,
  },
  labelBottom: {
    paddingTop: 6,
  },
  labelError: {
    color: COLORS.error,
  },
  error: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.xsmall,
    color: COLORS.error,
    marginLeft: 4,
  },
})
