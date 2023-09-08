import { StyleSheet } from "react-native";

import { theme } from "@theme/theme";

export function stylesSheet({ completed }: { completed: boolean }) {
  return StyleSheet.create({
    container: {
      width: "100%",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      padding: theme.metrics.pixel(12),
      borderColor: theme.colors.gray400,
      borderRadius: theme.metrics.pixel(8),
    },
    check: {
      width: theme.metrics.pixel(17.45),
      height: theme.metrics.pixel(17.45),
      borderRadius: theme.metrics.pixel(17.45 / 2),
      ...(!completed
        ? { borderWidth: 2, borderColor: theme.colors.blue }
        : {
            backgroundColor: theme.colors.purpleDark,
            alignItems: "center",
            justifyContent: "center",
          }),
    },

    description: {
      flex: 1,
      color: completed ? theme.colors.gray300 : theme.colors.gray100,
      fontSize: theme.metrics.pixel(14),
      maxWidth: theme.metrics.pixel(235),
      fontFamily: theme.fonts.weight.regular,
      marginHorizontal: theme.metrics.pixel(8),
      ...(completed ? { textDecorationLine: "line-through" } : {}),
    },
  });
}
