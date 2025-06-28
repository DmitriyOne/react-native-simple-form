import { useState } from "react"
import { TResidency } from "../types"

export const useResidency = () => {
  const [residency, setResidency] = useState<TResidency>(null)

  const onSelect = (value: TResidency) => {
    setResidency(value)
  }

  const reset = () => {
    setResidency(null)
  }

  return { residency, onSelect, reset }
}
