import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Dimensions,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataLogin, setDataLogin] = useState(initialState);
  const [inFocus, setInFocus] = useState({
    email: false,
    password: false,
  });
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 18 * 2
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!isReady) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.imgBG}
          source={require("../assets/bg-mountains.jpg")}
        >
          <View
            style={{
              ...styles.whiteBox,
              paddingBottom: isShowKeyboard ? 10 : 110,
            }}
          >
            <View style={{ width: dimensions - 18 * 2 }}>
              <Text style={styles.title}>Войти</Text>
              <View>
                <TextInput
                  style={!inFocus.email ? styles.input : styles.focusedInput}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  value={dataLogin.email}
                  onChangeText={(value) => {
                    setDataLogin((prev) => ({ ...prev, email: value }));
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setInFocus((prev) => ({ ...prev, email: true }));
                  }}
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                  }}
                  onBlur={() =>
                    setInFocus((prev) => ({ ...prev, email: false }))
                  }
                />
                <View>
                  <TextInput
                    style={
                      !inFocus.password
                        ? { ...styles.input, position: "relative" }
                        : { ...styles.focusedInput, position: "relative" }
                    }
                    placeholder={"Пароль"}
                    placeholderTextColor={"#BDBDBD"}
                    secureTextEntry={true}
                    value={dataLogin.password}
                    onChangeText={(value) => {
                      setDataLogin((prev) => ({ ...prev, password: value }));
                    }}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setInFocus((prev) => ({ ...prev, password: true }));
                    }}
                    onSubmitEditing={() => {
                      setIsShowKeyboard(false);
                    }}
                    onBlur={() =>
                      setInFocus((prev) => ({ ...prev, password: false }))
                    }
                  />
                  <TouchableOpacity
                    style={styles.btnPassword}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.btnBlue}>Показать</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => {
                  keyboardHide();
                  console.log(dataLogin);
                  setDataLogin(initialState);
                }}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.btnBlue}>Нет аккаунта? </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Registration")}>
                  <Text style={styles.btnBlue}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  whiteBox: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "transparent",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    marginTop: 16,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    height: 50,
    color: "#212121",
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    marginTop: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btnBlue: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnPassword: {
    position: "absolute",
    top: 30,
    right: 16,
  },
});
