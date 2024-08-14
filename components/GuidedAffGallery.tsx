import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/Aff-category";
import { Link } from "expo-router";

interface GuidedAffGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

export default function GuidedAffGallery({
  title,
  previews,
}: GuidedAffGalleryProps) {
  return (
    <View className="my-5 ">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/Affmation/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 mr-4 rounded-md">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="h-full w-full rounded-md"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
}
