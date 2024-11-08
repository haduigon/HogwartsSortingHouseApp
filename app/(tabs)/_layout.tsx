import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Hero } from "@/helpres/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Ionicons from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: currentHero } = useQuery<Hero>({
    queryKey: ["currentHero"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["currentHero"]),
  });

  function handleReset() {
    queryClient.setQueryData(["success"], 0);
    queryClient.setQueryData(["failed"], 0);

    queryClient.setQueryData(["list"], []);
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {},
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={"home"} color={focused ? "black" : "grey"} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey" }}>Home</Text>
          ),
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => handleReset()}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ListScreen"
        options={{
          title: "List",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={"code-slash"}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey" }}>List</Text>
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => router.push({ pathname: "/" })}
            >
              <View style={styles.backButtonBox}>
                <Ionicons name="left" size={20} color="black" />
                <Text>Back</Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => handleReset()}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Details"
        options={() => {
          return {
            title: currentHero?.name ? currentHero.name : "Hero Details",
            headerTitleAlign: "center",
            tabBarButton: () => null,
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => router.push({ pathname: "/ListScreen" })}
              >
                <View style={styles.backButtonBox}>
                  <Ionicons name="left" size={20} color="black" />
                  <Text>Back</Text>
                </View>
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  backButtonBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
