import { paths } from "../../../06_shared/config/routing"

export const CREATE_WALLET_FORM_TEXT = {
  question_resident: "Do you a resident of Russia?",
  answers_resident: {
    yes: "Yes",
    no: "No",
  },
  label_inn: "INN",
  placeholder_inn: "500200731234",
  footnote_rhf: "The form was built using React Hook Form.",
  footnote_cf: "The form was built using Custom Form.",
}

export const CREATE_WALLET_FORM_TEXT_ACCEPT_AGREEMENT = [
  { type: "text", value: "I agree with the " },
  {
    type: "link",
    value: "Privacy Policy",
    href: paths.privacy,
  },
  { type: "text", value: " and " },
  { type: "link", value: "Terms", href: paths.terms },
]
