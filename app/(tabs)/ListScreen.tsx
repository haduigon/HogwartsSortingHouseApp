/* eslint-disable */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  // Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Hero } from "@/helpres/types";
import { useRouter, Href } from "expo-router";
import ListItem from "@/components/ListItem/ListItem";
import Input from "@/components/Input/Input";

export default function ListScreen() {
  const queryClient = useQueryClient();

  const router = useRouter();

  const [visibleList, setVisibleList] = useState<Hero[] | undefined>(
    [] as Hero[],
  );

  const { data: cachedList } = useQuery<Hero[] | undefined>({
    queryKey: ["list"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["list"]),
  });

  useEffect(() => setVisibleList(cachedList), [cachedList]);

  function retryGuess(hero: Hero) {
    queryClient.setQueryData(["hero"], () => {
      return hero;
    });
    const path: Href = { pathname: "/" };
    router.push(path);
  }

  function search(text: string) {
    setVisibleList(
      cachedList?.filter((hero) =>
        hero.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Input onChange={search} />

        <FlatList
          data={visibleList}
          renderItem={({ item }) => (
            <ListItem hero={item} onPress={() => retryGuess(item)} />
          )}
          keyExtractor={(item) => item.name}
          style={styles.flatListContent}
        />
      </View>
    </KeyboardAvoidingView>
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
    // paddingBottom: 20,
    marginBottom: 100,
  },
});
