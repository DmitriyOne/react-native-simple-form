import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form"
import { RadioButton, TRadioButtonProps } from "../radio-button"

export type TRadioButtonRHFProps<T extends FieldValues> = Omit<
  TRadioButtonProps,
  "selected" | "onPress"
> & {
  rules?: RegisterOptions<T, Path<T>>
  control: Control<T>
  name: Path<T>
}

export const RadioButtonRHF = <T extends FieldValues>({
  rules,
  control,
  name,
  styles: customStyles = {},
  text,
  textPosition,
}: TRadioButtonRHFProps<T>) => {

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <RadioButton
            selected={text === value}
            onPress={() => onChange(text)}
            text={text}
            styles={customStyles}
            textPosition={textPosition}
          />
        )}
      />
    </>
  )
}
