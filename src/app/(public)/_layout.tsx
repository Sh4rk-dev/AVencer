import { Stack } from "expo-router";

export default function PublicRootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#1E1E1E" },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
