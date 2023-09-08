import { theme } from "@theme/theme";
import { StyleSheet } from "react-native";

export function stylesSheet() {
  return StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center" },
    description: {
      textAlign: "center",
      color: theme.colors.gray300,
      fontSize: theme.metrics.pixel(14),
      maxWidth: theme.metrics.pixel(287),
    },
    textHighlight: {
      fontFamily: theme.fonts.weight.bold,
    },
  });
}
