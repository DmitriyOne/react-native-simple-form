import { COLORS } from "@/src/06_shared/config/constants"
import { StyleSheet, Text, View } from "react-native"

export default function FormPage() {
  return (
    <View style={styles.component}>
      <Text>Form page</Text>
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
})
