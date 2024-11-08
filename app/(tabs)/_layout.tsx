import { Tabs, useNavigation, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TouchableOpacity, Text } from "react-native";
import { Hero } from "@/helpres/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function TabLayout() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const router = useRouter();

  const { data: currentHero } = useQuery<Hero>({
    queryKey: ["currentHero"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["currentHero"]),
  });

  function handleRightButtonPress() {
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
          title: "Home2",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => handleRightButtonPress()}
            >
              <Text>Right Action</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ListScreen"
        options={{
          title: "List",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => router.push({ pathname: '/' })}
            >
              <Text>Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => handleRightButtonPress()}
            >
              <Text>Right Action</Text>
            </TouchableOpacity>
          ),
        }}
      >
        
      </Tabs.Screen>
      <Tabs.Screen
        name="Details"
        options={() => {
          return {
            title: currentHero?.name ? currentHero.name : "Hero Details",
            tabBarButton: () => null,
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => router.push({ pathname: '/ListScreen' })}
              >
                <Text>Back</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Tabs>
  );
}
