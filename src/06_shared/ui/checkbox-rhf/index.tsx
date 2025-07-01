import { Checkbox, TCheckboxProps } from "@/src/06_shared/ui/checkbox"
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form"

export type TCheckboxRHFProps<T extends FieldValues> = Omit<
  TCheckboxProps,
  "checked" | "onPress" | "errors"
> & {
  rules?: RegisterOptions<T, Path<T>>
  control: Control<T>
  name: Path<T>
  errors: FieldErrors<T>
  controllerName: Path<T>
}

export const CheckboxRHF = <T extends FieldValues>({
  rules,
  control,
  name,
  errors,
  controllerName,
  childrenPosition,
  children,
  iconColors,
  iconSize,
  accessibilityLabel,
  styles: customStyles = {},
}: TCheckboxRHFProps<T>) => {
  const currentError = errors?.[controllerName]
  const errorMsgs =
    currentError?.types && typeof currentError.types === "object"
      ? Object.values(currentError.types)
      : currentError?.message
      ? [currentError.message]
      : []

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Checkbox
          checked={value}
          onPress={() => onChange(!value)}
          childrenPosition={childrenPosition}
          iconSize={iconSize}
          iconColors={iconColors}
          accessibilityLabel={accessibilityLabel}
          styles={customStyles}
          errors={errorMsgs}
        >
          {children}
        </Checkbox>
      )}
    />
  )
}
