import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ marginWithDimensions }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataLogin, setDataLogin] = useState(initialState);
  const [inFocus, setInFocus] = useState({
    email: false,
    password: false,
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{ ...styles.whiteBox, paddingBottom: isShowKeyboard ? 10 : 110 }}
      >
        <View style={{ width: marginWithDimensions - 18 * 2 }}>
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
              onBlur={() => setInFocus((prev) => ({ ...prev, email: false }))}
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
              <TouchableOpacity style={styles.btnPassword} activeOpacity={0.7}>
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
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.btnBlue}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 16,
  },
  btnBlue: {
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
