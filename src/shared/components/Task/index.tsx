import { TouchableOpacity, View, Text } from "react-native";

import TrashIcon from "@assets/icons/trash.svg";
import CheckIcon from "@assets/icons/check.svg";

import { theme } from "@theme/theme";
import { stylesSheet } from "./styles";

type TaskProps = {
  completed: boolean;
  description: string;
  onDeleteTask(): void;
  onClompleteTask(): void;
};

export function Task({
  completed,
  description,
  onDeleteTask,
  onClompleteTask,
}: TaskProps) {
  const styles = stylesSheet({ completed });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClompleteTask} style={styles.check}>
        {completed && (
          <CheckIcon
            width={theme.metrics.pixel(7.31)}
            height={theme.metrics.pixel(4.69)}
            color={theme.colors.gray100}
          />
        )}
      </TouchableOpacity>

      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={onDeleteTask}>
        <TrashIcon
          color={theme.colors.gray300}
          width={theme.metrics.pixel(12.48)}
          height={theme.metrics.pixel(14)}
        />
      </TouchableOpacity>
    </View>
  );
}
