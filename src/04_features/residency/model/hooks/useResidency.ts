import { useState } from "react"
import { TResidency } from "../types"

export const useResidency = () => {
  const [residency, setResidency] = useState<TResidency>(null)

  const resetResidency = () => {
    setResidency(null)
  }

  return {
    residency,
    onSelect: setResidency,
    resetResidency,
  }
}
