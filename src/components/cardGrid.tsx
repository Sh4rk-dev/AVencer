import { TouchableOpacity, View } from "react-native";

import { Text } from "@/components/text";
import { colors } from "@/styles/colors";

import { ChevronRight, LucideIcon } from "lucide-react-native";

interface CardGridProps {
  title: string;
  dark?: boolean;
  value?: number;
  icon: LucideIcon;
}

export function CardGrid({
  dark = false,
  icon: Icon,
  title,
  value,
}: CardGridProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`w-[48.5%] aspect-square  rounded-xl p-4 gap-8 ${
        dark ? "bg-secondary" : "bg-primary"
      }`}
    >
      <View className="flex-row justify-between items-center">
        <View
          className={`${dark ? "bg-background" : "bg-white"} p-3 rounded-xl`}
        >
          <Icon size={24} color={colors.primary} />
        </View>

        <ChevronRight size={18} color={dark ? colors.primary : colors.white} />
      </View>

      <View className="gap-2">
        <Text
          className={`${dark ? "text-primary" : "text-white"} font-semiBold`}
        >
          {title}
        </Text>

        <Text
          className={`${
            dark ? "text-primary" : "text-white"
          } text-2xl font-semiBold`}
        >
          R$ {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
