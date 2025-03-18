import { FlatList, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  Bell,
  ChartColumnBig,
  ChartLineIcon,
  ChevronRight,
  Component,
  CreditCard,
  LayoutGrid,
  Newspaper,
} from "lucide-react-native";

import { CardGrid } from "@/components/cardGrid";
import { Text } from "@/components/text";

import { cardHistoryItemMocked } from "@/mocked/historyMocked";
import { colors } from "@/styles/colors";

import { useHomeModel } from "@/screens/private/home/home.model";
import { CardHistoryItem } from "@/components/cardHistoryItem";

type HomeViewProps = ReturnType<typeof useHomeModel>;

export default function HomeView({ HandleNotification }: HomeViewProps) {
  return (
    <ScrollView>
      <View className="flex-1 w-full px-8">
        <View className="flex-row items-center justify-between mt-16">
          <Text className="text-2xl font-bold">Olá, Renan Rapace</Text>
          <TouchableOpacity onPress={HandleNotification}>
            <Bell size={24} color={"#FC5404"} />
          </TouchableOpacity>
        </View>

        <View className="mt-10 bg-secondary px-4 py-2 rounded-md flex-row items-center justify-between">
          <Text className="text-lg font-semiBold uppercase text-primary">
            Saldo de Fevereiro
          </Text>
          <Text className="text-lg font-semiBold text-green-600">
            R$ 2200,00
          </Text>
        </View>

        <View className="flex-1 w-full">
          <View className="mt-10 flex-row items-center justify-between">
            <Text className="text-2xl font-semiBold">
              Monitoramento de valores
            </Text>

            <View className="flex-row items-center gap-5">
              <TouchableOpacity>
                <LayoutGrid size={20} color={"#FC5404"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <ChartColumnBig size={20} color={"#9c9c9c"} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-1 w-full items-center justify-center gap-2 flex-row flex-wrap mt-5">
            <CardGrid
              dark
              value={2200.02}
              title="Valor total"
              icon={ChartLineIcon}
            />
            <CardGrid title="Pix" value={500} icon={Component} />
            <CardGrid title="Boleto" value={300} icon={Newspaper} />
            <CardGrid title="Cartão" value={1638.9} icon={CreditCard} />
          </View>
        </View>

        <View className="flex-1 mt-10 items-center justify-between">
          <View className="w-full flex-row justify-between pb-2 border-b border-tertiary/50">
            <Text className="text-2xl font-semiBold">Histórico</Text>

            <TouchableOpacity className="flex-row items-center gap-3">
              <Text className="text-tertiary font-light">Ver mais</Text>
              <ChevronRight size={16} color={colors.tertiary} />
            </TouchableOpacity>
          </View>

          <FlatList
            scrollEnabled={false}
            data={cardHistoryItemMocked.slice(0, 4)}
            className="flex-1 w-full mt-5"
            contentContainerClassName="gap-3 pb-20"
            renderItem={({ item }) => (
              <CardHistoryItem history={item} disabled />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* 
        <View className="flex-1 w-full pb-2 border-b border-tertiary/80">
          <Text className="text-2xl font-semiBold pb-10">Soluções rápidas</Text>

          <View className="flex-1 w-full aspect-square mt-5 items-center justify-center bg-primary rounded-md">

          </View>
        </View> */}
      </View>
    </ScrollView>
  );
}
