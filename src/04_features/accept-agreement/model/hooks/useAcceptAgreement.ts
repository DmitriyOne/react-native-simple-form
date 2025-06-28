import { useState } from "react"

export const useAcceptAgreement = () => {
  const [acceptAgreement, setAcceptAgreement] = useState(true)

  const onChecked = () => {
    setAcceptAgreement((prev) => !prev)
  }

  return {
    acceptAgreement,
    onChecked,
  }
}
