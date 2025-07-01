import {
  CREATE_WALLET_FORM_TEXT,
  CREATE_WALLET_FORM_TEXT_ACCEPT_AGREEMENT,
} from "@/src/05_entities/user/config"
import { TCreateWalletForm } from "@/src/05_entities/user/model"
import {
  AcceptAgreementCheckboxRHF,
  InnInputRHF,
  ResidencyRadioGroupRHF,
} from "@/src/05_entities/user/ui"
import { COLORS, TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { Button } from "@/src/06_shared/ui/button"
import { StyleSheet, Text } from "react-native"
import { useCreateWalletRHF } from "../model/hooks"

export const CreateWalletFormRHF = () => {
  const { control, errors, onSubmit, isSubmitting } = useCreateWalletRHF()

  return (
    <>
      <ResidencyRadioGroupRHF<TCreateWalletForm>
        control={control}
        errors={errors}
        name='residency'
        title={CREATE_WALLET_FORM_TEXT.question_resident}
        styles={{ container: styles.residencyContainer }}
      />
      <InnInputRHF<TCreateWalletForm>
        control={control}
        errors={errors}
        controllerName='inn'
        label={CREATE_WALLET_FORM_TEXT.label_inn}
        placeholder={CREATE_WALLET_FORM_TEXT.placeholder_inn}
        style={{ inputContainer: styles.innContainer }}
      />
      <AcceptAgreementCheckboxRHF<TCreateWalletForm>
        control={control}
        errors={errors}
        controllerName='acceptAgreement'
        content={CREATE_WALLET_FORM_TEXT_ACCEPT_AGREEMENT}
        name='acceptAgreement'
      />

      <Text style={styles.footnote}>
        * {CREATE_WALLET_FORM_TEXT.footnote_rhf}
      </Text>

      <Button
        title='Create wallet'
        disabled={isSubmitting}
        loading={isSubmitting}
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
