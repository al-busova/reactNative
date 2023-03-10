import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisteredScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="Registration" component={RegisteredScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
