import React from "react";
import { View, StyleSheet } from "react-native";
import TableauItem from "../TableauItem/TableauItem";

function Tableau() {
  return (
    <View style={styles.statContainer}>
      <TableauItem name="total" />
      <TableauItem name="failed" />
      <TableauItem name="success" />
    </View>
  );
}

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    padding: 10,
    marginTop: 0,
  },
  statItem: {
    borderColor: "black",
    borderWidth: 1,
    padding: 40,
  },
});

export default Tableau;
