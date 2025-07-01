import { useState } from "react"
import { initialState } from "../../config"

export const useAcceptAgreement = () => {
  const [acceptAgreement, setAcceptAgreement] = useState(initialState)

  const onChecked = () => {
    setAcceptAgreement((prev) => !prev)
  }

  const resetAcceptAgreement = () => {
    setAcceptAgreement(initialState)
  }

  return {
    acceptAgreement,
    onChecked,
    resetAcceptAgreement,
  }
}
