import { AcceptAgreement } from "@/src/04_features/accept-agreement/ui"
import { EnterInn } from "@/src/04_features/enter-inn/ui"
import { TEXT } from "@/src/04_features/residency/config"
import { Residency } from "@/src/04_features/residency/ui"
import { Button } from "@/src/06_shared/ui/button"
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
      />
      <EnterInn
        value={inn}
        onChangeText={handleChangeInn}
        errors={errors.inn}
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
      />
    </>
  )
}
