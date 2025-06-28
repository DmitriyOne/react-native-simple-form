import { useState } from "react"

export const useEnterInn = () => {
  const [inn, setInn] = useState<string>("")

  const reset = () => {
    setInn("")
  }

  return {
    inn,
    onChangeText: setInn,
    reset,
  }
}
