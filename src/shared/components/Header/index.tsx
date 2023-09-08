import { View } from "react-native";

import Logo from "@assets/images/logo.svg";

import { stylesSheet } from "./styles";
import { theme } from "@theme/theme";

const styles = stylesSheet();

export function Header() {
  return (
    <View style={styles.container}>
      <Logo
        width={theme.metrics.pixel(110.34)}
        height={theme.metrics.pixel(32)}
      />
    </View>
  );
}
