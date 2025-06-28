import { COLORS, TITLE_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { StyleSheet, Text, View } from "react-native"

export default function Terms() {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>Terms page</Text>
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
  },
})
