import { FC, PropsWithChildren } from "react"
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native"
import { BORDER_RADIUS, COLORS, TEXT_SIZE } from "../../config/constants"
import { FONT_FAMILY } from "../../config/fonts"

type TStylesProps = {
  button?: StyleProp<ViewStyle>
  text?: StyleProp<TextStyle>
}

type TProps = PropsWithChildren &
  Omit<TouchableOpacityProps, "style"> & {
    styles?: TStylesProps
    title?: string
    loading?: boolean
    loaderColor?: string
  }

export const Button: FC<TProps> = ({
  loaderColor = COLORS.white,
  styles: customStyles = {},
  title,
  loading,
  disabled,
  activeOpacity = 0.8,
  children,
  ...props
}) => {
  const componentStyle = [
    styles.component,
    (loading || disabled) && styles.disabled,
    customStyles?.button,
  ]
  const textStyle = [styles.text, customStyles?.text]
  return (
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityLabel={title}
      activeOpacity={activeOpacity}
      style={componentStyle}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size='small'
          color={loaderColor}
        />
      ) : children ? (
        children
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  component: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: "center",
    borderRadius: BORDER_RADIUS.small,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: COLORS.white,
    fontSize: TEXT_SIZE.small,
    fontFamily: FONT_FAMILY.montserrat_regular,
  },
})
