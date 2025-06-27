import { TEXT_SIZE } from "@/src/06_shared/config/constants"
import { FONT_FAMILY } from "@/src/06_shared/config/fonts"
import { RadioButton } from "@/src/06_shared/ui/radio-button"
import { StyleSheet, Text, View } from "react-native"
import { TEXT } from "../config"
import { useCitizenship } from "../model/hooks"

export const CitizenshipQuestion = () => {
  const { answer, selectYes, selectNo } = useCitizenship()

  return (
    <View>
      <Text style={styles.title}>{TEXT.question}</Text>
      <View style={styles.options}>
        <RadioButton
          selected={answer === "yes"}
          onPress={selectYes}
          text={TEXT.answers.yes}
        />
        <RadioButton
          selected={answer === "no"}
          onPress={selectNo}
          text={TEXT.answers.no}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.montserrat_regular,
    fontSize: TEXT_SIZE.medium,
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
})
