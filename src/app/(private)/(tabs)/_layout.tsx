import { Tabs } from "expo-router";

import {
  CirclePlus,
  HistoryIcon,
  Home,
  Menu,
  SquareStack,
} from "lucide-react-native";

import { colors } from "@/styles/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "#1E1E1E" },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: "#1E1E1E",
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.secondary,
        tabBarActiveBackgroundColor: "#FC5404",
      }}
    >
      <Tabs.Screen
        name="adding"
        options={{
          title: "Adicionar",
          tabBarIcon: ({ color }) => <CirclePlus size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Coleções",
          tabBarIcon: ({ color }) => <SquareStack size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Histórico",
          tabBarIcon: ({ color }) => <HistoryIcon size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => <Menu size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}
