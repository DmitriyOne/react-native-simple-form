import { COLORS, TITLE_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { paths } from "@/src/06_shared/config/routing"
import { Link } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function SoonFormPage() {
  return (
    <View style={styles.component}>
      <Link
        href={paths.form}
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.title}>Click me and go to the Form page!</Text>
        </TouchableOpacity>
      </Link>
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
    fontSize: TITLE_SIZE.small,
    textAlign: "center",
  },
})
