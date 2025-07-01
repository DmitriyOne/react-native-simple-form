import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import {
  RadioButtonRHF,
  TRadioButtonRHFProps,
} from "@/src/06_shared/ui/radio-button-rhf"
import { RHFError } from "@/src/06_shared/ui/rhf-error"
import React from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { CREATE_WALLET_FORM_TEXT } from "../config"

type TStylesProps<T extends FieldValues> = Pick<
  TRadioButtonRHFProps<T>,
  "styles"
> & {
  container: StyleProp<ViewStyle>
}

type TProps<T extends FieldValues> = Omit<
  TRadioButtonRHFProps<T>,
  "text" | "styles"
> & {
  title: string
  errors: FieldErrors<T>
  styles?: Partial<TStylesProps<T>>
}

export const ResidencyRadioGroupRHF = <T extends FieldValues>({
  title,
  errors,
  styles: customStyles = {},
  ...props
}: TProps<T>) => {
  const hasError = errors?.[props.name]

  const { container, styles: radioStyles } = customStyles

  return (
    <View style={container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionsWrapper}>
        <RadioButtonRHF<T>
          text={CREATE_WALLET_FORM_TEXT.answers_resident.yes}
          styles={radioStyles}
          {...props}
        />
        <RadioButtonRHF<T>
          text={CREATE_WALLET_FORM_TEXT.answers_resident.no}
          styles={radioStyles}
          {...props}
        />
      </View>
      {hasError && (
        <RHFError
          errors={errors[props.name]}
          style={styles.error}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
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
