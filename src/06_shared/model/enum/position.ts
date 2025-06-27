export const EPosition = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
} as const

export type EPosition = (typeof EPosition)[keyof typeof EPosition]
