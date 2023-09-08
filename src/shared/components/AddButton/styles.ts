import { StyleSheet } from "react-native";

import { theme } from "@theme/theme";

export function stylesSheet() {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      height: theme.metrics.pixel(52),
      borderRadius: theme.metrics.pixel(6),
      backgroundColor: theme.colors.blueDark,
      paddingVertical: theme.metrics.pixel(16),
      paddingHorizontal: theme.metrics.pixel(18),
    },
  });
}
