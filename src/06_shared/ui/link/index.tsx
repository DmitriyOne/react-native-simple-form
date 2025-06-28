import { Link as ExpoLink, LinkProps } from "expo-router"
import { FC } from "react"
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"

export type TLinkStylesProps = {
  link?: StyleProp<ViewStyle>
  text?: StyleProp<TextStyle>
}

type TProps = {
  href: LinkProps["href"]
  text: string
  styles?: TLinkStylesProps
  activeOpacity?: number
}

export const Link: FC<TProps> = ({
  href,
  text,
  activeOpacity = 0.8,
  styles: customStyles = {},
}) => {
  const linkStyle = [styles.link, customStyles?.link]

  const textStyle = [styles.text, customStyles?.text]

  return (
    <ExpoLink
      href={href}
      asChild
    >
      <TouchableOpacity
        style={linkStyle}
        activeOpacity={activeOpacity}
        accessibilityRole='link'
        accessibilityLabel={text}
      >
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </ExpoLink>
  )
}

const styles = StyleSheet.create({
  link: {},
  text: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    color: COLORS.black,
    fontSize: TEXT_SIZE.medium,
  },
})
