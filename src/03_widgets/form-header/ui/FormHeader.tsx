import { BackButton } from "@/src/04_features/back-button/ui"
import { Heading } from "@/src/06_shared/ui/heading"
import { FC } from "react"
import { StyleSheet } from "react-native"

type TProps = {
  title: string
}

export const FormHeader: FC<TProps> = ({ title }) => {
  return (
    <>
      <BackButton
        styles={{
          backButtonIcon: styles.backButtonIcon,
          backButton: styles.backButton,
        }}
      />
      <Heading styles={{ heading: styles.title }}>{title}</Heading>
    </>
  )
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 22,
  },
  backButtonIcon: {
    marginLeft: -8,
  },
  title: {
    marginBottom: 14,
  },
})
