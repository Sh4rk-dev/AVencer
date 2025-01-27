import { Redirect, Stack } from "expo-router";

export default function PrivateRootLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href={"/(public)/sign-in"} />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#1E1E1E" },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
