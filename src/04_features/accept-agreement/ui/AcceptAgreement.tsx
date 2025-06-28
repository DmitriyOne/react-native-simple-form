import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { Checkbox, TCheckboxStylesProps } from "@/src/06_shared/ui/checkbox"
import { Link } from "@/src/06_shared/ui/link"
import { FC } from "react"
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"
import { TEXT } from "../config"

type TStylesProps = TCheckboxStylesProps & {
  text?: StyleProp<TextStyle>
  error?: StyleProp<TextStyle>
}

type TProps = {
  checked: boolean
  onChecked: () => void
  styles?: TStylesProps
  error?: string
}

export const AcceptAgreement: FC<TProps> = ({
  checked,
  onChecked,
  error,
  styles: customStyles = {},
}) => {
  const checkboxStyles: TStylesProps = {
    checkboxContainer: customStyles.checkboxContainer,
    checkboxText: customStyles.checkboxText,
    checkboxIcon: customStyles.checkboxIcon,
  }

  const textStyles = [styles.text, customStyles.text]

  const linkStyles = {
    text: styles.link,
  }

  const errorStyles = [styles.error, customStyles.error]

  return (
    <View>
      <Checkbox
        checked={checked}
        onPress={onChecked}
        styles={checkboxStyles}
      >
        <View style={styles.container}>
          {TEXT.map((item) => {
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
      {error && <Text style={errorStyles}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  component: {},
  text: {
    display: "flex",
    justifyContent: "center",
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.small,
    color: COLORS.black,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: COLORS.primary,
    fontSize: TEXT_SIZE.small,
  },
  error: {
    color: COLORS.error,
    fontSize: TEXT_SIZE.xsmall,
  },
})
