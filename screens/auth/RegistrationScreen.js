import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegisteredScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inFocus, setInFocus] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [dataRegister, setDataRegister] = useState(initialState);
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
        <ImageBackground
          style={styles.imgBG}
          source={require("../../assets/bg-mountains.jpg")}
        >
           {/* <KeyboardAvoidingView behavior="height"> */}
          <View
            style={{
              ...styles.whiteBox,
              paddingBottom: isShowKeyboard ? 5 : 45,
            }}
          >
            <View style={{ ...styles.form, width: dimensions - 18 * 2 }}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.boxPhoto}>
                  <TouchableOpacity style={styles.add} activeOpacity={0.7}>
                    <Image source={require("../../assets/add.png")} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <View>
                <TextInput
                  style={!inFocus.login ? styles.input : styles.focusedInput}
                  placeholder={"Логин"}
                  placeholderTextColor={"#BDBDBD"}
                  value={dataRegister.login}
                  onChangeText={(value) => {
                    setDataRegister((prev) => ({ ...prev, login: value }));
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setInFocus((prev) => ({ ...prev, login: true }));
                  }}
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                  }}
                  onBlur={() =>
                    setInFocus((prev) => ({ ...prev, login: false }))
                  }
                />
                <TextInput
                  style={!inFocus.email ? styles.input : styles.focusedInput}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                  value={dataRegister.email}
                  onChangeText={(value) => {
                    setDataRegister((prev) => ({ ...prev, email: value }));
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
                    secureTextEntry={true}
                    placeholder={"Пароль"}
                    placeholderTextColor={"#BDBDBD"}
                    value={dataRegister.password}
                    onChangeText={(value) => {
                      setDataRegister((prev) => ({
                        ...prev,
                        password: value,
                      }));
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
                  console.log(dataRegister);
                  // navigation.navigate("Home");
                  setDataRegister(initialState);
                }}
              >
                <Text style={styles.btnTitle}>Зарегестрироваться</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.btnBlue}>Уже есть аккаунт? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} activeOpacity={0.7}>
                  <Text style={styles.btnBlue}>Войти</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            {/* </KeyboardAvoidingView> */}
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
    paddingTop: 92,
    alignItems: "center",
  },
  form: {
    position: "relative",
  },
  boxPhoto: {
    position: "absolute",
    top: -152,
    left: 100,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderColor: "transparent",
    borderRadius: 16,
    alignItems: "center",
  },
  add: {
    position: "absolute",
    right: -25 / 2,
    bottom: 12,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
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
    lineHeight: 19,
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
  btnPassword: {
    position: "absolute",
    top: 30,
    right: 16,
  },
  btnBlue: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    marginBottom: 12,
  },
  btnTitle: {
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
