import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerRight: () => (
            <MaterialIcons name="logout" size={24} color="gray" />
            //   <DrawerButton onPress={() => navigation.toggleDrawer()} />
          ),
          // tabBarIconStyle: { color:'orange'},
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="pluscircle"
              size={32}
              color="#FF6C00"
              // iconStyle={{ padding: 20 }}
            ></AntDesign>
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
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
