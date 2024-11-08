import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Feather";

type Props = {
  value?: string;
  onChange?: (text: string) => void;
};

function Input({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Filter characters"
        value={value}
        onChangeText={onChange}
        style={styles.searchInput}
      />
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    borderColor: "#ccc",
    // borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    // justifyContent: "space-between",
    width: "85%",
  },
  icon: {
    marginRight: 10,
  },
});

export default Input;
