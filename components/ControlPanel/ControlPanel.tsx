import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import HufflepuffImage from "../../assets/images/hufflepuff.png";
import Slytherin from "../../assets/images/slytherin.png";
import Ravenclaw from "../../assets/images/ravenclaw.png";
import Gryffindor from "../../assets/images/gryffindor.png";

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
          <View style={styles.imageBox}>
            <Image
              source={Gryffindor || ""}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.text}>Gryffindor</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Slytherin")}
        >
          <View style={styles.imageBox}>
            <Image
              source={Slytherin || ""}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.text}>Slytherin</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Ravenclaw")}
        >
          <View style={styles.imageBox}>
            <Image
              source={Ravenclaw || ""}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.text}>Ravenclaw</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => onPress("Hufflepuff")}
        >
          <View style={styles.imageBox}>
            <Image
              source={HufflepuffImage || ""}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.text}>Hufflepuff</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.pressableBig} onPress={() => onPress("")}>
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
    width: "90%",
    marginVertical: 10,
  },
  pressable: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    height: 80,
    // borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
  pressableBig: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    // borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    width: 40,
    height: 40,
  },
  imageBox: {
    padding: 5,
  },
});

export default ControlPanel;
