import { Text, View } from "react-native";
import { stylesSheet } from "./styles";

type QuantityOfTasksProps = {
  label: string;
  labelColor: string;
  quantity: number;
};

export function QuantityOfTasks({
  label,
  quantity,
  labelColor,
}: QuantityOfTasksProps) {
  const styles = stylesSheet({ labelColor });
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.quantityTag}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </View>
  );
}
