import { AcceptAgreement } from "@/src/04_features/accept-agreement/ui"
import { EnterInn } from "@/src/04_features/enter-inn/ui"
import { Residency } from "@/src/04_features/residency/ui"
import { CREATE_WALLET_FORM_TEXT } from "@/src/05_entities/user/config"
import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { Button } from "@/src/06_shared/ui/button"
import { StyleSheet, Text } from "react-native"
import { useCreateWalletForm } from "../model/hooks"

export const CreateWalletForm = () => {
  const {
    inn,
    residency,
    acceptAgreement,
    handleSelectResidency,
    handleChangeInn,
    handleToggleAgreement,
    errors,
    isLoading,
    onSubmit,
    isDisabled,
  } = useCreateWalletForm()

  return (
    <>
      <Residency
        title={CREATE_WALLET_FORM_TEXT.question_resident}
        value={residency}
        onSelect={handleSelectResidency}
        errors={errors.residency}
        styles={{ container: styles.residencyContainer }}
      />
      <EnterInn
        value={inn}
        onChangeText={handleChangeInn}
        errors={errors.inn}
        styles={{ inputContainer: styles.innContainer }}
      />
      <AcceptAgreement
        checked={acceptAgreement}
        onChecked={handleToggleAgreement}
        errors={errors.acceptAgreement}
      />
      <Text style={styles.footnote}>
        * {CREATE_WALLET_FORM_TEXT.footnote_cf}
      </Text>
      <Button
        title='Create wallet'
        disabled={isDisabled}
        loading={isLoading}
        onPress={onSubmit}
        styles={{ button: styles.button }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  residencyContainer: {
    marginBottom: 24,
  },
  innContainer: {
    marginBottom: 24,
  },
  button: {
    marginTop: "auto",
  },
  footnote: {
    color: COLORS.black,
    fontSize: TEXT_SIZE.xsmall,
    fontFamily: FONT_FAMILY.montserrat_regular,
    marginLeft: 4,
    marginTop: 18,
  },
})
