import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form"
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
import { RHFError } from "../rhf-error"

export type TInputRHFStylesProps = {
  inputContainer?: StyleProp<ViewStyle>
  input?: StyleProp<TextStyle>
  error?: StyleProp<TextStyle>
  labelTop?: StyleProp<TextStyle>
  labelBottom?: StyleProp<TextStyle>
}

export type TInputRHFProps<T extends FieldValues> = Omit<
  TextInputProps,
  "value" | "onChangeText" | "style"
> & {
  rules?: RegisterOptions<T, Path<T>>
  control: Control<T>
  label: string
  labelPosition?: Extract<EPosition, "top" | "bottom">
  controllerName: Path<T>
  errors: FieldErrors<T>
  style?: TInputRHFStylesProps
}

export const InputRHF = <T extends FieldValues>({
  rules,
  control,
  errors,
  style: customStyles = {},
  controllerName,
  labelPosition = "top",
  label,
  ...props
}: TInputRHFProps<T>) => {
  const hasError = errors?.[controllerName]

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

  return (
    <View style={componentStyles}>
      <Controller
        control={control}
        name={controllerName}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            {labelPosition === "top" && (
              <Text style={labelTopStyles}>{label}</Text>
            )}
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholderTextColor={props.placeholderTextColor ?? COLORS.gray}
              style={inputStyles}
              {...props}
            />
            {labelPosition === "bottom" && (
              <Text style={labelBottomStyles}>{label}</Text>
            )}
          </>
        )}
      />

      {hasError && (
        <RHFError
          errors={errors[controllerName]}
          style={customStyles?.error}
        />
      )}
    </View>
  )
}

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
})
