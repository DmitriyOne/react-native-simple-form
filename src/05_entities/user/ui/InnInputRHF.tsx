import { InputRHF, TInputRHFProps } from "@/src/06_shared/ui/input-rhf"
import { FieldValues } from "react-hook-form"

export const InnInputRHF = <T extends FieldValues>({
  ...props
}: TInputRHFProps<T>) => {
  return <InputRHF<T> {...props} />
}
