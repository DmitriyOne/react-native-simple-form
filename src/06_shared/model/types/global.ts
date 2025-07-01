import { LinkProps } from "expo-router"

export type TTextAndLink = {
  type: "text" | "link"
  value: string
  href?: LinkProps["href"]
}
