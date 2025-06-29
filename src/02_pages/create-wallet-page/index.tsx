import { CreateWalletForm } from "@/src/03_widgets/create-wallet-form/ui"
import { FormHeader } from "@/src/03_widgets/form-header/ui"
import { COLORS } from "@/src/06_shared/config/constants"
import { StyleSheet, View } from "react-native"

export const CreateWalletPage = () => {
  return (
    <View style={styles.component}>
      <FormHeader title='Fill in your details' />
      <CreateWalletForm />
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
