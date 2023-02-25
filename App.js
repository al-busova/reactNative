import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import RegisteredScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState, useEffect } from "react";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//   });
// };
export default function App() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width -18*2);
  // const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
},[])

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
 
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBG}
        source={require("./assets/bg-mountains.jpg")}
      >
        <RegisteredScreen marginWithDimensions={dimensions} />
        {/* <LoginScreen marginWithDimensions={dimensions}  /> */}
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
