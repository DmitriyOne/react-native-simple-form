import {
  createWalletFormSchema,
  TCreateWalletForm,
} from "@/src/05_entities/user/model"
import { delay } from "@/src/06_shared/model/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitErrorHandler, useForm } from "react-hook-form"
import { defaultValues } from "../../config"

export const useCreateWalletRHF = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCreateWalletForm>({
    resolver: zodResolver(createWalletFormSchema),
    defaultValues,
  })

  const onSubmit = handleSubmit(async (data) => {
    await delay(2000)
    reset()
    console.log("[FORM CREATE WALLET DATA]: ", data)
  })

  const onError: SubmitErrorHandler<TCreateWalletForm> = (errors, e) => {
    return console.log(errors)
  }

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    onError,
    isSubmitting,
  }
}
