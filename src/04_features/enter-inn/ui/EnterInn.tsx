import { Input, TInputStylesProps } from "@/src/06_shared/ui/input"
import { FC } from "react"
import { TEXT } from "../constant"

type TStylesProps = TInputStylesProps & {}

type TProps = {
  value: string
  onChangeText: (value: string) => void
  styles?: TStylesProps
  errors?: string[]
}

export const EnterInn: FC<TProps> = ({
  value,
  onChangeText,
  styles,
  errors,
}) => {
  return (
    <Input
      label={TEXT.label}
      value={value}
      onChangeText={onChangeText}
      keyboardType='numeric'
      placeholder={TEXT.placeholder}
      style={styles}
      errors={errors}
    />
  )
}
