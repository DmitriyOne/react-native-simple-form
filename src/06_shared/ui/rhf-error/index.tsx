import { FieldErrors, FieldValues } from "react-hook-form"
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import { COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"
import { isValidArray } from "../../model/utils"

type TProps<T extends FieldValues> = {
  errors: FieldErrors<T>[keyof T]
  style?: StyleProp<TextStyle>
}

export const RHFError = <T extends FieldValues>({
  errors,
  style,
}: TProps<T>) => {
  const messages =
    errors?.types && typeof errors.types === "object"
      ? Object.values(errors.types)
      : errors?.message
      ? [errors.message]
      : []

  if (!isValidArray(messages)) {
    return <></>
  }

  return (
    <>
      {messages.map((msg, i) => (
        <Text
          key={i}
          style={[styles.error, style]}
        >
          - {msg}
        </Text>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.xsmall,
    color: COLORS.error,
    marginLeft: 4,
  },
})
