import { Text } from "@/components/text";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

interface CollectionProps {
  id: string;
  title: string;
  totalValue: number;
}

export function Collection({ id, title, totalValue }: CollectionProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        className="w-full py-3 px-2 mb-4 flex-row items-center justify-between bg-secondary rounded-md"
        key={id}
      >
        <View className="gap-2">
          <Text className="font-semiBold text-xl">{title}</Text>
          <View className="w-1/3 h-px bg-primary/50 rounded-md" />
          <Text className="text-lg font-light text-tertiary">
            Valor total: R$ {totalValue}
          </Text>
        </View>

        <ChevronRight size={20} color={"#FC5404"} />
      </View>
    </TouchableOpacity>
  );
}
