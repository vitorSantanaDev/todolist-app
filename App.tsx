import { theme } from "@theme/theme";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("@assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("@assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },
});
