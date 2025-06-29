import { AcceptAgreement } from "@/src/04_features/accept-agreement/ui"
import { EnterInn } from "@/src/04_features/enter-inn/ui"
import { TEXT } from "@/src/04_features/residency/config"
import { Residency } from "@/src/04_features/residency/ui"
import { Button } from "@/src/06_shared/ui/button"
import { StyleSheet } from "react-native"
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
        title={TEXT.question}
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
})
