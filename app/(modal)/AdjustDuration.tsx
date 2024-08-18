import { View, Text, Pressable } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function AdjustDuration() {
  return (
    <View className="flex-1 relative">
      <AppGradient colors={[`#161b2e`, "#0a4d4a", "#766a67"]}>
        <Text>test</Text>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text>Adjust Your Meditation Duration</Text>
        </View>
      </AppGradient>
    </View>
  );
}
