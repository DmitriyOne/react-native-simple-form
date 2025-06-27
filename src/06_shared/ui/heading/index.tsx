import { FC, PropsWithChildren } from "react"
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import { TITLE_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"

type TStylesProps = {
  heading?: StyleProp<TextStyle>
}

type TProps = PropsWithChildren & {
  styles?: TStylesProps
}

export const Heading: FC<TProps> = ({
  styles: customStyles = {},
  children,
}) => {
  return (
    <Text style={[styles.component, customStyles?.heading]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  component: {
    fontSize: TITLE_SIZE.medium,
    fontFamily: FONT_FAMILY.montserrat_bold,
  },
})
