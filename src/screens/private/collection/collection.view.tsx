import { FlatList, Image, TouchableOpacity, View } from "react-native";

import { COLLECTIONS_MOCKED } from "@/mocked/collectionsMocked";
import { useCollectionModel } from "@/screens/private/collection/collection.model";

import { Plus, Search } from "lucide-react-native";

import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Collection } from "@/components/modalCollection/collection";

type CollectionViewProps = ReturnType<typeof useCollectionModel>;

export function CollectionView({
  openModalNewCollection,
}: CollectionViewProps) {
  return (
    <View className="mt-20 px-7">
      <View className="w-full items-center gap-3">
        <Text className="text-3xl text-primary">Suas Coleções</Text>

        <Text className="text-center text-lg">
          Aqui você poderá separar seus gantos em coleções e categoriza-los.
        </Text>
      </View>

      <View className="pt-5 flex-row justify-between items-center gap-4 pb-2">
        <Input
          leftIcon={Search}
          className="flex-1 items-center text-white"
          placeholder="Filtrar coleção"
        />

        <TouchableOpacity
          onPress={openModalNewCollection}
          activeOpacity={0.7}
          className="h-12 px-2 justify-center items-center border border-primary rounded-md"
        >
          <Plus size={24} color={"#FFFFFF"} />
        </TouchableOpacity>
      </View>

      <FlatList
        className="mb-44 pt-2"
        data={COLLECTIONS_MOCKED}
        renderItem={({ item }) => <Collection {...item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center gap-4 pt-10">
            <Image
              className="mb-24"
              source={require("@/assets/emptyCollection.png")}
            />

            <Text className="text-lg text-tertiary text-center">
              Parece que você não tem nenhuma coleção criada... Que tal criar
              uma agora?{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
