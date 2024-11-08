import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import { fetchStudentCharacters, getRandomElement } from "../../helpres/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import { Hero } from "@/helpres/types";
import Tableau from "@/components/Tableau/Tableau";
import ModalMessage from "@/components/ModalMessage/ModalMessage";

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const { data, error, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudentCharacters,
  });

  const { data: hero } = useQuery<Hero>({
    queryKey: ["hero"],
    enabled: false,
    initialData: () => queryClient.getQueryData(["hero"]),
  });

  useEffect(() => {
    if (!data) return;
    if (data.image === undefined || data.image.length === 0) {
      data.image = "https://hp-api.onrender.com/images/harry.jpg";
    }
    const randomGuy: object | undefined = getRandomElement(data);
    if (randomGuy) {
      const newRandomGuy = { ...(randomGuy as Hero), attempts: 0 };

      queryClient.setQueryData(["hero"], () => {
        return newRandomGuy;
      });
    }
  }, [data]);

  useEffect(() => {
    queryClient.setQueryData(["success"], (prevData: number) => {
      return prevData || 0;
    });
    queryClient.setQueryData(["failed"], (prevData: number) => {
      return prevData || 0;
    });
    queryClient.setQueryData(["list"], (prevData: []) => {
      return prevData || [];
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  function reffresh() {
    const randomGuy = getRandomElement(data);
    if (randomGuy) {
      const newRandomGuy = { ...(randomGuy as object), attempts: 0 };

      queryClient.setQueryData(["hero"], () => {
        return newRandomGuy;
      });
    }
  }

  function guess(house: string) {
    if (house === hero?.house) {
      queryClient.setQueryData(["success"], (prevData: number) => {
        return prevData + 1;
      });

      setModalMessage("SUCCESS!");

      setTimeout(() => reffresh(), 2000);
      setTimeout(() => setModalMessage(null), 2000);
    } else {
      queryClient.setQueryData(["failed"], (prevData: number) => {
        return prevData + 1;
      });
      setModalMessage("FAIL!");
      setTimeout(() => setModalMessage(null), 2000);
    }

    if (hero) {
      queryClient.setQueryData(["list"], (prevData: [] = []) => {
        const existingHero: Hero | undefined = prevData.find(
          (elem: Hero) => elem.name === hero.name,
        );

        if (existingHero) {
          return prevData.map((elem: Hero) => {
            return elem.name === hero.name
              ? {
                  ...elem,
                  attempts: hero.house !== house ? elem.attempts + 1 : 0,
                }
              : elem;
          });
        } else {
          return [
            ...prevData,
            hero.house !== house
              ? { ...hero, attempts: 1 }
              : { ...hero, attempts: 0 },
          ];
        }
      });
    }
  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={false} onRefresh={reffresh} />}
      contentContainerStyle={styles.container}
    >
      <Tableau />
      {modalMessage && (
        <ModalMessage
          message={modalMessage}
          isVisible={true}
          onClose={() => {}}
        />
      )}

      <View>
        {hero && (
          <Image
            source={{
              uri:
                hero.image.length === 0
                  ? "https://hp-api.onrender.com/images/harry.jpg"
                  : hero.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text>Hero: {hero?.name}</Text>
        <Text>House: {hero?.house}</Text>
      </View>
      <ControlPanel onPress={guess} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
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
    width: 150,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
