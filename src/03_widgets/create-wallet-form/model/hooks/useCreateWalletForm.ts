import { useAcceptAgreement } from "@/src/04_features/accept-agreement/model/hooks"
import { useEnterInn } from "@/src/04_features/enter-inn/model/hooks"
import { useResidency } from "@/src/04_features/residency/model/hooks"
import { useLoading } from "@/src/06_shared/model/hooks"
import { delay } from "@/src/06_shared/model/utils"
import { useCallback, useState } from "react"
import { MESSAGE } from "../../config"
import { useCreateWalletValidate } from "./useCreateWalletValidate"

export const useCreateWalletForm = () => {
  const { residency, onSelect, resetResidency } = useResidency()
  const { inn, onChangeText, resetInn } = useEnterInn()
  const { acceptAgreement, onChecked, resetAcceptAgreement } =
    useAcceptAgreement()
  const { errors, hasErrors, validate, clearFieldError, resetErrors } =
    useCreateWalletValidate({ residency, inn, acceptAgreement })

  const [isSubmitted, setSubmitted] = useState(false)
  const { isLoading, startLoading, stopLoading } = useLoading()

  const handleSelectResidency = useCallback(
    (value: typeof residency) => {
      clearFieldError("residency")
      onSelect(value)
    },
    [onSelect],
  )

  const handleChangeInn = useCallback(
    (value: string) => {
      clearFieldError("inn")
      onChangeText(value)
    },
    [onChangeText],
  )

  const handleToggleAgreement = useCallback(() => {
    clearFieldError("acceptAgreement")
    onChecked()
  }, [onChecked])

  const resetFields = useCallback(() => {
    resetResidency()
    resetInn()
    resetAcceptAgreement()
  }, [])

  const onSubmit = useCallback(async () => {
    setSubmitted(true)

    if (!validate()) return

    resetErrors()

    try {
      startLoading()
      await delay(2000)
      resetFields()
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : MESSAGE.errors.api
      console.error(errorMessage)
    } finally {
      stopLoading()
    }
  }, [validate, startLoading, stopLoading])

  const isDisabled = isLoading || (isSubmitted && hasErrors)

  return {
    errors,
    residency,
    handleSelectResidency,
    inn,
    handleChangeInn,
    acceptAgreement,
    handleToggleAgreement,
    isLoading,
    onSubmit,
    isDisabled,
  }
}
