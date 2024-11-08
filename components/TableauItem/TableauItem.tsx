/* eslint-disable */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

type Props = {
  name: string;
};

function TableauItem({ name }: Props) {
  const queryClient = useQueryClient();

  const { data: fieldName } = useQuery<number>({
    queryKey: [name],
    enabled: false,
    initialData: () => queryClient.getQueryData([name]),
  });
  const { data: success } = useQuery<number>({
    queryKey: ["success"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["success"]),
  });
  const { data: failed } = useQuery<number>({
    queryKey: ["failed"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["failed"]),
  });

  const total = (success ?? 0) + (failed ?? 0);

  const displayData = name === "total" ? total : fieldName;

  return (
    <View style={styles.statItem}>
      <Text style={[styles.text, styles.boldText]}>{name}</Text>
      <Text style={styles.text}>{displayData}</Text>
    </View>
  );
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
    padding: 20,
    width: 100,
  },
  text: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default TableauItem;
