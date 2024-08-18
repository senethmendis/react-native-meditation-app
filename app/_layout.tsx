import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { preventAutoHideAsync } from "expo-splash-screen";
import { useEffect } from "react";

//prevet splash screen auto hiding
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/AdjustDuration"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
