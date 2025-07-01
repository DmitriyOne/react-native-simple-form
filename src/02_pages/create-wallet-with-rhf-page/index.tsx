import { CreateWalletFormRHF } from "@/src/03_widgets/create-wallet-rhf/ui"
import { FormHeader } from "@/src/03_widgets/form-header/ui"
import { COLORS } from "@/src/06_shared/config/constants"
import { StyleSheet, View } from "react-native"

export const CreateWalletWithReactHookFormPage = () => {
  return (
    <View style={styles.component}>
      <FormHeader
        title='Fill in your details'
        isFootnote
      />
      <CreateWalletFormRHF />
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
