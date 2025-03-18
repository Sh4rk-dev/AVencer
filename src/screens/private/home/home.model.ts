import { router } from "expo-router";

export function useHomeModel() {
  function HandleNotification() {
    router.navigate("/(private)/(stack)/notifications/notification");
  }

  return { HandleNotification };
}
