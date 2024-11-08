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
import Ionicons from "@expo/vector-icons/FontAwesome";
import Ionicons2 from "@expo/vector-icons/MaterialIcons";

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
        <View style={styles.imageBox}>
          <Image
            source={{
              uri: !hero.image
                ? "https://hp-api.onrender.com/images/harry.jpg"
                : hero.image,
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.nameBox}>
            <Text style={styles.title}>{hero.name}</Text>
            <Text>Attempts: {hero.attempts}</Text>
          </View>
        </View>

        {hero.attempts !== 0 && (
          <View style={styles.retryBox}>
            <Pressable onPress={() => onPress()} style={styles.retryIcon}>
              <Ionicons2 size={32} name="autorenew" color={"grey"} />
            </Pressable>
            <Ionicons2 size={32} name="cancel" color={"red"} />
          </View>
        )}
        {hero.attempts === 0 && (
          <Ionicons size={32} name="check-circle" color={"green"} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 80,
    marginTop: 10,
    // borderRadius: 50,
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // marginTop: 0,
  },
  text: {
    textAlign: "center",
  },
  imageBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  nameBox: {
    marginLeft: 20,
  },
  retryBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  retryIcon: {
    marginRight: 20,
  },
});

export default ListItem;
