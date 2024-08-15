import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/aff-galary";
import { GalleryPreviewData } from "@/constants/models/Aff-category";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function AffmationPractice() {
  const { itemId } = useLocalSearchParams();

  const [affmation, setAffmation] = useState<GalleryPreviewData>();

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affmationData = AFFIRMATION_GALLERY[index].data;
      const affmationToStart = affmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affmationToStart) {
        setAffmation(affmationToStart);
        return;
      }
    }
  }, []);

  console.log(affmation);

  return (
    <View className="flex-1">
      <ImageBackground
        src={affmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)"]}>
          <Text>test</Text>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
