import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

export default function CrommentsScreen() {
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

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
          {/* <KeyboardAvoidingView behavior="height"> */}
            <View>
              <Text>CommentsScreen</Text>
            </View>
          {/* </KeyboardAvoidingView> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});