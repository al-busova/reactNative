import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarStyle: {
          paddingHorizontal: 45,
          height: 83,
          paddingBottom: 34,
          paddingTop: 9,
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerRight: () => (
            <MaterialIcons name="logout" size={24} color="gray" />
          ),
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity style={styles.iconPlus} activeOpacity={0.7} onPress={() => navigation.navigate('Создать публикацию')}>
              <AntDesign name="plus" size={16} color="white" />
            </TouchableOpacity>
          ),
        })}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    alignItems: "center",
    gap: 10,
  },
  iconPlus: {
    height: 40,
    width:70,
    paddingHorizontal: 25,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 40,
  },
});
