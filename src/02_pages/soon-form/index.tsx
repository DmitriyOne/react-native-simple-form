import {
  BORDER_RADIUS,
  COLORS,
  TEXT_SIZE,
  TITLE_SIZE,
} from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { paths } from "@/src/06_shared/config/routing"
import { Link } from "@/src/06_shared/ui/link"
import { StyleSheet, Text, View } from "react-native"

export const SoonFormPage = () => {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>Your form soon!</Text>

      <Text style={styles.question}>
        How do you want to create your wallet?
      </Text>
      <View style={styles.linkContainer}>
        <Link
          href={paths.create_wallet}
          text='Custom form'
          styles={{
            text: styles.link,
          }}
        />
        <Link
          href={paths.create_wallet_with_react_hook_form}
          text='React hook form'
          styles={{
            text: styles.link,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: FONT_FAMILY.montserrat_bold,
    fontSize: TITLE_SIZE.medium,
    paddingBottom: 12,
  },
  question: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.small,
    paddingBottom: 4,
    textAlign: "center",
  },
  linkContainer: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.xsmall,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.black,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.small,
  },
  mb_16: {
    marginBottom: 16,
  },
})
