import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Content({ children }: any) {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>;
}
