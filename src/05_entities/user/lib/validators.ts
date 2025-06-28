export const validateInn = (inn: string) => {
  return /^\d{12}$/.test(inn)
}

export const validateResidency = (residency: string | null) => {
  return residency === 'yes' || residency === 'no'
}
