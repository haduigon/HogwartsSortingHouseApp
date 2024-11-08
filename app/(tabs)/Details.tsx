import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Hero } from "@/helpres/types";
import useGetCustomQuery from "@/hooks/customHooks";

function HeroDetails() {
  const customQuery = useGetCustomQuery();

  const currentHero: Hero = customQuery("currentHero") as Hero;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: !currentHero?.image
            ? "https://hp-api.onrender.com/images/harry.jpg"
            : currentHero.image,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      {currentHero && currentHero.attempts > 0 ? (
        <View style={styles.statContainer}>
          <Text style={styles.textRed}>ACCESS DENIED</Text>
        </View>
      ) : (
        <View style={styles.statContainer}>
          <Text style={styles.text}>House: {currentHero?.house}</Text>
          <Text style={styles.text}>
            Date of birdth: {currentHero?.dateOfBirth}
          </Text>
          <Text style={styles.text}>Actor: {currentHero?.actor}</Text>
          <Text style={styles.text}>Species: {currentHero?.species}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da",
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 20,
  },
  text: {
    padding: 10,
    paddingTop: 0,
  },
  statContainer: {
    width: "100%",
    padding: 20,
  },
  textRed: {
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    borderColor: "red",
    borderWidth: 5,
    width: "60%",
    padding: 20,
    borderRadius: 5,
  },
});

export default HeroDetails;
