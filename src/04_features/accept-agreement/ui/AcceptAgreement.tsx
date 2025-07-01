import { CREATE_WALLET_FORM_TEXT_ACCEPT_AGREEMENT } from "@/src/05_entities/user/config"
import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { Checkbox, TCheckboxStylesProps } from "@/src/06_shared/ui/checkbox"
import { Link } from "@/src/06_shared/ui/link"
import { FC } from "react"
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"

type TStylesProps = TCheckboxStylesProps & {
  text?: StyleProp<TextStyle>
  error?: StyleProp<TextStyle>
}

type TProps = {
  checked: boolean
  onChecked: () => void
  styles?: TStylesProps
  errors?: string[]
}

export const AcceptAgreement: FC<TProps> = ({
  checked,
  onChecked,
  errors,
  styles: customStyles = {},
}) => {
  const checkboxStyles: TStylesProps = {
    container: customStyles.container,
    contentWrapper: customStyles.contentWrapper,
    checkboxText: customStyles.checkboxText,
    checkboxIcon: customStyles.checkboxIcon,
  }

  const textStyles = [styles.text, customStyles.text]

  const linkStyles = {
    text: styles.link,
  }

  return (
    <Checkbox
      checked={checked}
      onPress={onChecked}
      styles={checkboxStyles}
      accessibilityLabel='Accept agreement'
      errors={errors}
    >
      <View style={styles.container}>
        {CREATE_WALLET_FORM_TEXT_ACCEPT_AGREEMENT.map((item) => {
          if (item.type === "text") {
            return (
              <Text
                key={item.value}
                style={textStyles}
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
                styles={linkStyles}
              />
            )
          }
        })}
      </View>
    </Checkbox>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
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
