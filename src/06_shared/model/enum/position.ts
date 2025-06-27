export const EPosition = {
  left: "left",
  right: "right",
} as const

export type EPosition = (typeof EPosition)[keyof typeof EPosition]
