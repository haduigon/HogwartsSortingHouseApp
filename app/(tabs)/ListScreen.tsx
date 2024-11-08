import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { Hero } from "@/helpres/types";
import { useRouter, Href } from "expo-router";
import ListItem from "@/components/ListItem/ListItem";
import Input from "@/components/Input/Input";
import Tableau from "@/components/Tableau/Tableau";
import useGetCustomQuery from "@/hooks/customHooks";

export default function ListScreen() {
  const queryClient = useQueryClient();

  const router = useRouter();
  const customQuery = useGetCustomQuery();

  const cachedList: Hero[] = customQuery("list") as Hero[];

  const [visibleList, setVisibleList] = useState<Hero[] | undefined>(
    [] as Hero[],
  );

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
      style={[styles.container, styles.lines]}
    >
      <Tableau />
      <View style={styles.container}>
        <Input onChange={search} />

        <FlatList
          data={visibleList}
          renderItem={({ item }) => (
            <ListItem hero={item} onPress={() => retryGuess(item)} />
          )}
          keyExtractor={(item) => item.name.toString()}
          style={styles.flatListContent}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lines: {
    borderColor: "black",
    borderTopWidth: 5,
    borderBottomWidth: 5,
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
    marginBottom: 10,
    marginTop: 5,
  },
});
