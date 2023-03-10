import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";

export default function MapScreen() {
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 18 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>MapScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});