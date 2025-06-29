import { useState } from "react"

export const useEnterInn = () => {
  const [inn, setInn] = useState<string>("")

  const resetInn = () => {
    setInn("")
  }

  return {
    inn,
    onChangeText: setInn,
    resetInn,
  }
}
