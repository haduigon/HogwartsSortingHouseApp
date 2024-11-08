import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: (house: string) => void;
};

const ControlPanel: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Gryffindor")}
        >
          <Text style={styles.text}>Gryffindor</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Slytherin")}
        >
          <Text style={styles.text}>Slytherin</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Ravenclaw")}
        >
          <Text style={styles.text}>Ravenclaw</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Hufflepuff")}
        >
          <Text style={styles.text}>Hufflepuff</Text>
        </Pressable>
      </View>
      <View style={styles.fullWidthPressable}>
        <Pressable style={styles.pressable} onPress={() => onPress("")}>
          <Text style={styles.text}>Not in house</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  fullWidthPressable: {
    width: 300,
    marginVertical: 10,
    backgroundColor: "#e5e5e5",
    flex: 1,
    borderRadius: 5,
  },
  pressable: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default ControlPanel;
