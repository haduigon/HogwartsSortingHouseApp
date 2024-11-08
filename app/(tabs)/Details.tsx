// import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import { useLocalSearchParams } from 'expo-router';
import { Hero } from "@/helpres/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function HeroDetails() {
  const queryClient = useQueryClient();

  const { data: currentHero } = useQuery<Hero>({
    queryKey: ["currentHero"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["currentHero"]),
  });

  return (
    <View>
      <View style={styles.statContainer}>
        <Text>{currentHero?.name}</Text>
        <Text>{currentHero?.attempts}</Text>
        <Image
          source={{
            uri: !currentHero?.image
              ? "https://hp-api.onrender.com/images/harry.jpg"
              : currentHero.image,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
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
    width: 50,
    height: 80,
    marginTop: 20,
    // borderRadius: 50,
  },
  text: {
    textAlign: "center",
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginTop: 10,
  },
});

export default HeroDetails;
