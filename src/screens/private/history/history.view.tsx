import { CardHistoryItem } from "@/components/cardHistoryItem";
import { Text } from "@/components/text";
import { cardHistoryItemMocked } from "@/mocked/historyMocked";
import { transactionMocked } from "@/mocked/transaction";
import { useHistoryModel } from "@/screens/private/history/history.model";
import { FlatList, ScrollView, View } from "react-native";

type HistoryViewProps = ReturnType<typeof useHistoryModel>;

export function HistoryView({ handleOpenDetailsHistory }: HistoryViewProps) {
  return (
    <ScrollView>
      <View className="mt-20 px-7">
        <View className="w-full items-center gap-3 mb-10">
          <Text className="text-3xl text-primary">Histórico</Text>
        </View>

        <View>
          <View className="w-1/3">
            <Text className="text-2xl">Dia {transactionMocked[0].date}</Text>
            <View className="w-1/3 h-px bg-primary/50 rounded-md mt-2" />
          </View>

          <FlatList
            data={transactionMocked}
            className="flex-1 w-full mt-5"
            contentContainerClassName="gap-3 pb-10"
            renderItem={({ item }) => (
              <CardHistoryItem
                details
                history={item}
                onPress={handleOpenDetailsHistory}
              />
            )}
            keyExtractor={(item) => item.date}
          />
        </View>
      </View>
    </ScrollView>
  );
}
