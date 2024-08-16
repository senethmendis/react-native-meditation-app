import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import MEDITATION_IMAGES from "@/constants/med-img";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
