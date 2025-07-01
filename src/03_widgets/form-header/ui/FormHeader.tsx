import { BackButton } from "@/src/04_features/back-button/ui"
import { COLORS } from "@/src/06_shared/config/constants"
import { Heading } from "@/src/06_shared/ui/heading"
import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

type TProps = {
  title: string
  isFootnote?: boolean
}

export const FormHeader: FC<TProps> = ({ title, isFootnote }) => {
  return (
    <>
      <BackButton
        styles={{
          backButtonIcon: styles.backButtonIcon,
          backButton: styles.backButton,
        }}
      />
      <View style={styles.titleContainer}>
        <Heading>
          {title}
          {isFootnote && <Text style={styles.footnote}>*</Text>}
        </Heading>
      </View>
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  footnote: {
    color: COLORS.black,
    marginLeft: 4,
  },
})
