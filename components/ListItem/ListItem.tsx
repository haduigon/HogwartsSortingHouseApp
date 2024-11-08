/* eslint-disable */
import React from "react";
import {
  // Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Hero } from "@/helpres/types";
import { useRouter } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

type ListItemProps = {
  onPress: () => void;
  hero: Hero;
};

function ListItem({ hero, onPress }: ListItemProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  function handlePress(hero: Hero) {
    queryClient.setQueryData(["currentHero"], hero);

    router.push({
      pathname: "/Details",
    });
  }

  return (
    <Pressable onPress={() => handlePress(hero)}>
      <View style={styles.statContainer}>
        <Text>{hero.name}</Text>
        <Text>{hero.attempts}</Text>
        <Image
          source={{
            uri: !hero.image
              ? "https://hp-api.onrender.com/images/harry.jpg"
              : hero.image,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Pressable onPress={() => onPress()}>
          <Text>Retry</Text>
        </Pressable>
      </View>
    </Pressable>
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
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
  },
  statItem: {
    borderColor: "black",
    borderWidth: 1,
    padding: 40,
  },
  flatListContent: {
    paddingBottom: 20,
    marginBottom: 40,
  },
});

export default ListItem;
