import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";

export default function AppGradient({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) {
  return (
    <LinearGradient colors={colors} className="flex-1 ">
      <Content>{children}</Content>
    </LinearGradient>
  );
}
