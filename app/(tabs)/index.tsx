import { COLORS, TEXT_SIZE, TITLE_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { StyleSheet, Text, View } from "react-native"

export default function Index() {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>Hi there!</Text>
      <Text style={styles.text}>Go ahead and create your wallet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONT_FAMILY.montserrat_bold,
    fontSize: TITLE_SIZE.medium,
    paddingBottom: 4,
  },
  text: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.small,
  },
})
