import React from "react";
import { View, StyleSheet, Text } from "react-native";
import useGetCustomQuery from "@/hooks/customHooks";
import { AppProps } from "@/helpres/types";

type Props = {
  name: AppProps;
};

function TableauItem({ name }: Props) {

  const customQuery = useGetCustomQuery();

  const fieldName = customQuery(name) as number;
  const success = customQuery('success') as number;
  const failed = customQuery('failed') as number;

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
  statItem: {
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    width: '30%',
  },
  text: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default TableauItem;
