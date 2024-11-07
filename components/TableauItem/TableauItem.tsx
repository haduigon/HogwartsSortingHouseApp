import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

type Props = {
  name: string,
}

function TableauItem({ name }: Props) {
  const queryClient = useQueryClient();

  const { data: fieldName } = useQuery<number>({
    queryKey: [name],
    enabled: false,
    initialData: () => queryClient.getQueryData([name]),
  });
console.log(fieldName, name, "fieldName");

  return (
    <View style={styles.statItem}>
      <Text style={styles.text}>{fieldName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    marginTop: 50,
  },
  statItem: {
    borderColor: "black",
    borderWidth: 1,
    padding: 40,
  },
  text: {
    textAlign: "center",
  },
})

export default TableauItem;