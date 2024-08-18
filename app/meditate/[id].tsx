import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/med-img";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/med-data";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlayAudio, setIsPlayAudio] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    //exit
    if (secondsRemaining === 0) {
      setIsMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  // format itme

  const formattedTimeMinits = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");

  const formtatterTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  const ToggleMeditationgSessionStatus = async () => {
    if (secondsRemaining === 0) setSecondsRemaining(10);
    setIsMeditating(!isMeditating);
    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initilizeSound();
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayAudio) {
      await sound.playAsync();
      setIsPlayAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayAudio(false);
    }
  };

  const initilizeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setAudioSound(sound);
    return sound;
  };

  const handleAdjuustDuration = () => {
    if (isMeditating) ToggleMeditationgSessionStatus();
    router.push("/(modal)/AdjustDuration");
  };

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
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full h-44 w-44 justify-center items-center">
              <Text className="text-4xl text-blue-600 font-rmono">
                {formattedTimeMinits}:{formtatterTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5 ">
            <CustomButton
              title="Start Meditation"
              onPress={ToggleMeditationgSessionStatus}
            />
            <CustomButton
              title="Ajust Duration"
              onPress={handleAdjuustDuration}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
