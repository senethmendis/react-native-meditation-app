import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/aff-galary";
import { GalleryPreviewData } from "@/constants/models/Aff-category";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function AffmationPractice() {
  const { itemId } = useLocalSearchParams();

  const [affmation, setAffmation] = useState<GalleryPreviewData>();

  const [sentences, setSentences] = useState<String[]>();

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const affmationData = AFFIRMATION_GALLERY[index].data;
      const affmationToStart = affmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affmationToStart) {
        setAffmation(affmationToStart);

        const affmationArry = affmationToStart.text.split(".");

        //remove last elemt if empty
        if (affmationArry[affmationArry.length - 1] == "") {
          affmationArry.pop();
        }

        setSentences(affmationArry);
        return;
      }
    }
  }, []);

  console.log(affmation?.image);

  return (
    <View className="flex-1">
      <ImageBackground
        src={affmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign
              name="leftcircle"
              size={50}
              color="white"
              className="absolute top-16 left-6 z-10"
            />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences?.map((sen, i) => (
                  <Text key={i} className="text-white mb-12 font-bold text-xl">
                    {sen}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
