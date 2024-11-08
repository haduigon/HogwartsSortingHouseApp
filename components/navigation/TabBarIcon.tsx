// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { View } from "react-native";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
    </View>
  );
}
