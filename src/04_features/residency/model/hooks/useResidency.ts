import { useState } from "react"
import { TResidency } from "../types"

export const useResidency = () => {
  const [residency, setResidency] = useState<TResidency>("")

  const resetResidency = () => {
    setResidency("")
  }

  return {
    residency,
    onSelect: setResidency,
    resetResidency,
  }
}
