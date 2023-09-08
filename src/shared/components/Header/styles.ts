import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { theme } from "@theme/theme";

export function stylesSheet() {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: theme.metrics.pixel(173),
      paddingVertical: theme.metrics.pixel(70),
      backgroundColor: theme.colors.gray700,
    },
  });
}
