import { FlatList, View } from "react-native";

import { Filter } from "lucide-react-native";

import { Input } from "@/components/input";
import { CardCollection } from "@/components/modalCollection/cardCollection";
import { GROUPS } from "@/mocked/groupMocked";

export function GroupCollection() {
  return (
    <View className="gap-24 px-6 pt-2">
      <Input label="Filtro" leftIcon={Filter} placeholder="Digite o filtro" />

      <FlatList
        data={GROUPS}
        scrollEnabled
        className="pb-10"
        contentContainerClassName="gap-3"
        renderItem={({ item }) => <CardCollection group={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
