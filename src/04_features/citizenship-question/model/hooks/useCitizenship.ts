import { useState } from "react"
import { TAnswer } from "../types"

export const useCitizenship = () => {
  const [answer, setAnswer] = useState<TAnswer>(null)

  const selectYes = () => {
    setAnswer("yes")
  }

  const selectNo = () => {
    setAnswer("no")
  }

  const reset = () => {
    setAnswer(null)
  }

  return { answer, selectYes, selectNo, reset }
}
