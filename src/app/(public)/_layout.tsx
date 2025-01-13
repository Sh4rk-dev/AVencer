import { Stack } from "expo-router";

export default function PublicRootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
        contentStyle: { backgroundColor: "#1E1E1E" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="recover-password" />
    </Stack>
  );
}
