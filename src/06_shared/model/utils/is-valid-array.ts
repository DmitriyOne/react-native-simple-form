export const isValidArray = <T>(value: T[] | null | undefined): value is T[] =>
  Array.isArray(value) && value.length > 0
