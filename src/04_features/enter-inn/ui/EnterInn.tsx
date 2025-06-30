import { CREATE_WALLET_FORM_TEXT } from "@/src/05_entities/user/config"
import { Input, TInputStylesProps } from "@/src/06_shared/ui/input"
import { FC } from "react"
import { Keyboard } from "react-native"

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
      label={CREATE_WALLET_FORM_TEXT.label_inn}
      value={value}
      onChangeText={onChangeText}
      keyboardType='numeric'
      placeholder={CREATE_WALLET_FORM_TEXT.placeholder_inn}
      style={styles}
      errors={errors}
      onSubmitEditing={() => Keyboard.dismiss()}
      returnKeyType='done'
    />
  )
}
