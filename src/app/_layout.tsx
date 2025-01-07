import "../styles/global.css";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const run = async () => {
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    };
    run();
  }, [loaded]);

  if (!loaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <Slot />

      <StatusBar
        translucent
        backgroundColor="transparent"
        style="light"
        animated
      />
    </>
  );
}
