/* eslint-disable */
import React, { useEffect, useMemo, useState } from "react";
import {
  // Image,
  StyleSheet,
  // Platform,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { fetchStudentCharacters, getRandomElement } from "../../helpres/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFocusEffect } from "expo-router";
import ControlPanel from "@/components/ControlPanel";
import { Hero } from "@/helpres/types";
import Tableau from "@/components/Tableau/Tableau";

type Stat = {
  total: number;
  success: number;
  failed: number;
};

const initialValue: Stat = {
  total: 0,
  success: 0,
  failed: 0,
};

export default function HomeScreen() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudentCharacters,
  });

   const { data: hero } = useQuery<Hero>({
    queryKey: ['hero'],
    enabled: false,
    initialData: () => queryClient.getQueryData(['hero']),
  });

  // const [hero, setHero] = useState<Hero | null>(null);

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
    if (!data) return;
    if (data.image === undefined || data.image.length === 0) {
      data.image = "https://hp-api.onrender.com/images/harry.jpg";
    }
    const randomGuy: object | undefined = getRandomElement(data);
    if (randomGuy) {
      const newRandomGuy = { ...randomGuy as {}, attempts: 0 };

      // setHero(newRandomGuy as Hero);

      queryClient.setQueryData(["hero"], () => {
      return newRandomGuy;
    });

    }
  }, [data]);

  useEffect(() => {
    queryClient.setQueryData(["success"], (prevData: number) => {
      return prevData || 0;
    });
    queryClient.setQueryData(["total"], (prevData: number) => {
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

  function reffr() {
    const randomGuy = getRandomElement(data);
    if (randomGuy) {
      const newRandomGuy = { ...randomGuy as object, attempts: 0 };
      // setHero(newRandomGuy as Hero);

       queryClient.setQueryData(["hero"], () => {
      return newRandomGuy;
    });
    }
  }

 

  function guess(house: string) {
    // console.log(house, "house");
    if (house === hero?.house) {
      queryClient.setQueryData(["success"], (prevData: number) => {
        return prevData + 1;
      });
    } else {
      queryClient.setQueryData(["failed"], (prevData: number) => {
        return prevData + 1;
      });
    }

    if (hero) {
      queryClient.setQueryData(["list"], (prevData: [] = []) => {
        const existingHero: Hero | undefined = prevData.find((elem: Hero) => elem.name === hero.name);
        
        if (existingHero) {
          // console.log('uuuiiii', existingHero.house);          
          return prevData.map((elem: Hero) => {
            return elem.name === hero.name
              ? {
                ...elem, attempts:
                  hero.house !== house
                    ? elem.attempts + 1
                    : 0,
              }
              : elem;
          });
        } else {
          return [
            ...prevData, hero.house !== house
              ? { ...hero, attempts: 1 }
              : { ...hero, attempts: 0 },
          ];
        }
      });
    }
  }

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} onRefresh={reffr} />}
        contentContainerStyle={styles.container}
      >
        <Tableau />
        <View

        // headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
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
          {/* <Text>Welcome!</Text> */}
          <Text>{hero?.name}</Text>
          <Text>{hero?.house}</Text>
          <Text>{hero?.attempts}</Text>
          
        </View>
        <ControlPanel onPress={guess}/>
      </ScrollView>
      
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
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
    marginTop: 50,
    // borderRadius: 50,
  },
  // statContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "100%",
  //   padding: 20,
  //   marginTop: 50,
  // },
  text: {
    textAlign: "center",
  },
  // statItem: {
  //   borderColor: "black",
  //   borderWidth: 1,
  //   padding: 40,
  // },
});
