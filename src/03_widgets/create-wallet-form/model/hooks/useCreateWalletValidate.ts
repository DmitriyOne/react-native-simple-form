import {
  createWalletFormSchema,
  TCreateWalletForm,
} from "@/src/05_entities/user/model"
import { useCallback, useState } from "react"
import { TErrorMap, TField } from "../types"

export const useCreateWalletValidate = (form: TCreateWalletForm) => {
  const [errors, setErrors] = useState<TErrorMap>({})

  const resetErrors = useCallback(() => setErrors({}), [])

  const clearFieldError = useCallback((field: TField) => {
    setErrors((prev) => {
      if (!prev[field]) return prev
      const copy = { ...prev }
      delete copy[field]
      return copy
    })
  }, [])

  const validate = useCallback((): boolean => {
    const result = createWalletFormSchema.safeParse(form)

    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors)
      return false
    }

    resetErrors()
    return true
  }, [form])

  const hasErrors = Object.keys(errors).length > 0

  return { errors, hasErrors, validate, clearFieldError, resetErrors }
}
