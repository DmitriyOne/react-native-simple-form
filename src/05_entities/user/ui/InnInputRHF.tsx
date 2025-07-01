import { InputRHF, TInputRHFProps } from "@/src/06_shared/ui/input-rhf"
import { FieldValues } from "react-hook-form"
import { Keyboard } from "react-native"

type TProps<T extends FieldValues> = Omit<
  TInputRHFProps<T>,
  "onSubmitEditing" | "returnKeyType" | "keyboardType"
> & {}

export const InnInputRHF = <T extends FieldValues>({ ...props }: TProps<T>) => {
  return (
    <InputRHF<T>
      onSubmitEditing={() => Keyboard.dismiss()}
      returnKeyType='done'
      keyboardType='numeric'
      {...props}
    />
  )
}
