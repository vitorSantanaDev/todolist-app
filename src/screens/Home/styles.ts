import { theme } from "@theme/theme";
import { StyleSheet } from "react-native";

export function stylesSheet() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: theme.metrics.pixel(24),
    },
    addNewTaskRow: {
      width: "100%",
      marginTop: -theme.metrics.pixel(30),
      alignItems: "center",
      flexDirection: "row",
      marginBottom: theme.metrics.pixel(32),
    },
    textInput: {
      flex: 1,
      marginRight: theme.metrics.pixel(4),
    },
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.metrics.pixel(20),
    },
    divider: {
      height: theme.metrics.pixel(1),
      backgroundColor: theme.colors.gray400,
      marginBottom: theme.metrics.pixel(48),
    },
  });
}
