import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

export default function ProfileScreen() {
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
      <ImageBackground
        style={styles.imgBG}
        source={require("../../assets/bg-mountains.jpg")}
      >
        <View>
          <Text>ProfileScreen</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
