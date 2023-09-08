import { useCallback, useState } from "react";
import { theme } from "@theme/theme";
import { stylesSheet } from "./styles";
import { TextInput, TextInputProps } from "react-native";

export function TextInputComponent({
  style,
  value,
  placeholder,
  onChangeText,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const styles = stylesSheet({ isFocused });

  return (
    <TextInput
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.container, style]}
      placeholderTextColor={theme.colors.gray300}
    />
  );
}
