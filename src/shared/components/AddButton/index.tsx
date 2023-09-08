import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { stylesSheet } from "./styles";

import PlusIcon from "@assets/icons/plus.svg";
import { theme } from "@theme/theme";

const styles = stylesSheet();

export function AddButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <PlusIcon
        width={theme.metrics.pixel(16)}
        height={theme.metrics.pixel(16)}
        color={theme.colors.gray100}
      />
    </TouchableOpacity>
  );
}
