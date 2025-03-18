import { CustomHeader } from "@/components/header";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";

export default function StackLayout() {
  const defaultStyleConfig: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "slide_from_bottom",
    contentStyle: { backgroundColor: "#1E1E1E" },
  };

  return (
    <Stack screenOptions={defaultStyleConfig}>
      <Stack.Screen
        name="notifications/notification"
        options={{
          title: "Notificações",
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Stack>
  );
}
