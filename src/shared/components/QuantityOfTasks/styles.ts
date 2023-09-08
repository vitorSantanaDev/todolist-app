import { StyleSheet } from "react-native";

import { theme } from "@theme/theme";

export function stylesSheet({ labelColor }: { labelColor: string }) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    label: {
      color: labelColor,
      fontFamily: theme.fonts.weight.bold,
      fontSize: theme.metrics.pixel(14),
      marginRight: theme.metrics.pixel(8),
    },
    quantityTag: {
      alignItems: "center",
      justifyContent: "center",
      minWidth: theme.metrics.pixel(25),
      height: theme.metrics.pixel(19),
      borderRadius: theme.metrics.pixel(999),
      backgroundColor: theme.colors.gray400,
      paddingHorizontal: theme.metrics.pixel(8),
    },
    quantityText: {
      textAlign: "center",
      color: theme.colors.gray200,
      fontSize: theme.metrics.pixel(12),
      fontFamily: theme.fonts.weight.bold,
    },
  });
}
