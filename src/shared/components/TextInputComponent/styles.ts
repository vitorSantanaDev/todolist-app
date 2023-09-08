import { StyleSheet } from "react-native";

import { theme } from "@theme/theme";

export function stylesSheet({ isFocused }: { isFocused: boolean }) {
  return StyleSheet.create({
    container: {
      color: theme.colors.gray100,
      height: theme.metrics.pixel(54),
      fontSize: theme.metrics.pixel(16),
      paddingLeft: theme.metrics.pixel(16),
      backgroundColor: theme.colors.gray500,
      borderRadius: theme.metrics.pixel(6),
      fontFamily: theme.fonts.weight.regular,
      paddingVertical: theme.metrics.pixel(16),
      borderWidth: theme.metrics.pixel(1),
      borderColor: isFocused ? theme.colors.purpleDark : theme.colors.gray700,
    },
  });
}
