export const MIN_INN_LENGTH = 8
export const MAX_INN_LENGTH = 12

export const VALIDATION_MESSAGE = {
  residency: {
    required: "Required residency",
  },
  inn: {
    min: `INN must be at least ${MIN_INN_LENGTH} characters long`,
    max: `INN must be at least ${MAX_INN_LENGTH} characters long`,
  },
  acceptAgreement: {
    required: "You must accept the agreement",
  },
}
