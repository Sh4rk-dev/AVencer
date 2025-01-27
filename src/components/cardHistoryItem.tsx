import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { CircleMinusIcon, CirclePlus, Minus, Plus } from "lucide-react-native";
import { View } from "react-native";

interface CardHistoryItemProps {
  history: {
    id?: string;
    tag: string;
    date: string;
    title: string;
    amount: number;
    description: string;
    transactionType: "Despesa" | "Receita" | string;
  };
}

export function CardHistoryItem({ history }: CardHistoryItemProps) {
  return (
    <View className="flex-1 w-full p-4 bg-secondary rounded-md">
      <Text className="font-light text-tertiary pb-1">{history.tag}</Text>

      <View className="flex-row items-center gap-2 mb-3">
        <Text className="font-semiBold text-xl">{history.title} -</Text>
        <Text className="flex-1 text-tertiary text-xl" numberOfLines={1}>
          {history.description}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="font-medium text-tertiary">{history.date}</Text>

        <View className="flex-row gap-4 items-center bg-black/30 px-3  rounded-md">
          {history.transactionType === "Receita" ? (
            <CirclePlus size={16} color={colors.green} />
          ) : (
            <CircleMinusIcon size={16} color={colors.red} />
          )}

          <Text className="font-semiBold text-xl text-white">
            R$ {history.amount}
          </Text>
        </View>
      </View>
    </View>
  );
}
