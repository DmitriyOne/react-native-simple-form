import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { TTextAndLink } from "@/src/06_shared/model/types"
import { CheckboxRHF, TCheckboxRHFProps } from "@/src/06_shared/ui/checkbox-rhf"
import { Link } from "@/src/06_shared/ui/link"
import { FieldValues } from "react-hook-form"
import { StyleSheet, Text } from "react-native"

type TProps<T extends FieldValues> = TCheckboxRHFProps<T> & {
  content: TTextAndLink[]
}

export const AcceptAgreementCheckboxRHF = <T extends FieldValues>({
  content,
  ...props
}: TProps<T>) => {
  return (
    <CheckboxRHF<T> {...props}>
      {content.map((item) => {
        if (item.type === "text") {
          return (
            <Text
              key={item.value}
              style={styles.text}
            >
              {item.value}
            </Text>
          )
        } else {
          return (
            <Link
              key={item.value}
              text={item.value}
              href={item.href!}
              styles={{ text: styles.link }}
            />
          )
        }
      })}
    </CheckboxRHF>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.small,
    color: COLORS.black,
  },
  link: {
    color: COLORS.primary,
    fontSize: TEXT_SIZE.small,
  },
})
