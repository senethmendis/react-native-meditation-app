import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

import GuidedAffGallery from "@/components/GuidedAffGallery";
import AFFIRMATION_GALLERY from "@/constants/aff-galary";

export default function Affmation() {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-100 text-3xl font-bold">
            Change your Affomation
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
}
