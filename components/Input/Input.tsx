import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value?: string;
  onChange?: (text: string) => void;
}

function Input({ value, onChange }: Props) { 
  return (
    <TextInput
      placeholder="Search"
      value={value}
      onChangeText={onChange}
      style={styles.searchInput}
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Input;