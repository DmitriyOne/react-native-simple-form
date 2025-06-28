import { paths } from "@/src/06_shared/config/routing"

export const TEXT = [
  { type: "text", value: "I agree with the " },
  {
    type: "link",
    value: "Privacy Policy",
    href: paths.privacy,
  },
  { type: "text", value: " and " },
  { type: "link", value: "Terms", href: paths.terms },
]
