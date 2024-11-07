/* eslint-disable */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  // Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Animated,
} from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Stat, Hero } from "@/helpres/types";
import { useFocusEffect } from "@react-navigation/native";

function ListItem(hero: Hero) {
  // console.log(hero, "heroo");

  return (
    <View>
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
    </View>
  );
}

export default function ListScreen() {
  const queryClient = useQueryClient();
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useFocusEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  useEffect(() => {
    const cachedData: Stat | undefined = queryClient.getQueryData(["stat"]);
    // console.log(cachedData, "cachedData");
  }, [queryClient]);

  const { data: cachedData } = useQuery<Stat>({
    queryKey: ["stat"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["stat"]),
  });
  const { data: cachedList } = useQuery<Hero[] | undefined>({
    queryKey: ["list"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["list"]),
  });

      // console.log(cachedList, "cachedData LIST");


  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <View style={{
        // marginBottom: 10,
      }}>
        <Text>{cachedData?.total}</Text>

        <FlatList
          data={cachedList}
          renderItem={(name) => ListItem(name.item)}
          keyExtractor={(item) => item.name}
          style={styles.flatListContent}
        />

      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginBottom: 10
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
    width: "100%",
    padding: 20,
    marginTop: 50,
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
