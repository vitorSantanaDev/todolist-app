import { Text, View } from "react-native";

import { stylesSheet } from "./styles";

import ClipboardIcon from "@assets/icons/clipboard.svg";
import { theme } from "@theme/theme";

const styles = stylesSheet();

export function PlaceholderEmptyToDoList() {
  return (
    <View style={styles.container}>
      <ClipboardIcon
        width={theme.metrics.pixel(56)}
        height={theme.metrics.pixel(56)}
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.description}>
        <Text style={styles.textHighlight}>
          You don't have tasks registered yet
        </Text>{" "}
        Create tasks and organize your to-do items
      </Text>
    </View>
  );
}
