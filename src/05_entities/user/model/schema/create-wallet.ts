import { z } from "zod"
import {
  MAX_INN_LENGTH,
  MIN_INN_LENGTH,
  VALIDATION_MESSAGE,
} from "../../config"

export const createWalletFormSchema = z.object({
  residency: z.string().min(1, VALIDATION_MESSAGE.residency.required),
  inn: z
    .string()
    .min(MIN_INN_LENGTH, VALIDATION_MESSAGE.inn.min)
    .max(MAX_INN_LENGTH, VALIDATION_MESSAGE.inn.max),
  acceptAgreement: z.boolean().refine((val) => val === true, {
    message: VALIDATION_MESSAGE.acceptAgreement.required,
  }),
})

export type TCreateWalletForm = z.infer<typeof createWalletFormSchema>
