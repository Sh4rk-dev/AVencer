import { ScrollView, TouchableOpacity, View } from "react-native";

import {
  Boxes,
  Calendar,
  ChevronDown,
  DollarSign,
  FileText,
  Share,
} from "lucide-react-native";

import { colors } from "@/styles/colors";

import { Button } from "@/components/button";
import { CalendarView } from "@/components/calendar/calendar";
import { Input } from "@/components/input";
import { Modal } from "@/components/modal";
import { GroupCollection } from "@/components/modalCollection/groupCollection";
import { Text } from "@/components/text";

import { useNewTransactionModel } from "@/screens/private/newTransaction/new.transaction.model";

type NewTransactionViewProps = ReturnType<typeof useNewTransactionModel>;

export function NewTransactionView({
  onModal,
  onGroup,
  setOnGroup,
  setOnModal,
  CloseModalGroup,
  CloseModalCalendar,
}: NewTransactionViewProps) {
  return (
    <View className="flex-1 mt-20 px-7">
      <ScrollView>
        <View className="w-full items-center gap-3">
          <Text className="text-3xl text-primary">
            Adicione uma nova transação
          </Text>

          <Text className="text-center text-lg">
            Cadastre um novo valor e adicione em sua conta ou em alguma coleção.
          </Text>
        </View>

        <View className="mt-5 gap-4">
          <Input
            label="Valor"
            leftIcon={DollarSign}
            placeholder="Digite o valor"
          />

          <View className="gap-4">
            <Text>Data</Text>

            <TouchableOpacity
              onPress={() => setOnModal(true)}
              activeOpacity={0.7}
              className="flex-row items-center h-12 px-2 justify-between border border-primary rounded-md"
            >
              <View className="flex-1  flex-row items-center gap-3">
                <Calendar size={20} color={colors.primary} />
                <Text className="text-tertiary">Escolha uma data</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="gap-4">
            <Text>Categoria</Text>

            <TouchableOpacity
              onPress={() => setOnGroup(true)}
              activeOpacity={0.7}
              className="flex-row items-center h-12 px-2 justify-between border border-primary rounded-md"
            >
              <View className="flex-1  flex-row items-center gap-3">
                <Boxes size={20} color={colors.primary} />
                <Text className="text-tertiary">Escolha uma categoria</Text>
              </View>

              <ChevronDown size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>

          <Input
            label="Descrição"
            leftIcon={FileText}
            placeholder="Escreva uma descrição"
          />

          <View className="gap-4">
            <Text>Tipo de transação</Text>

            <View className="w-full flex-row gap-4">
              <Button
                size="sm"
                variant="secondary"
                className="flex-1 items-center justify-center"
              >
                <Text className="font-bold uppercase text-center">Entrada</Text>
              </Button>
              <Button size="sm">
                <Text className="font-bold uppercase text-center">Saída</Text>
              </Button>
            </View>
          </View>

          <View className="gap-4">
            <Text>Comprovante</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center h-12 px-2 justify-between border-2 border-dotted border-primary rounded-md"
            >
              <View className="flex-1  flex-row items-center gap-3">
                <Share size={20} color={colors.primary} />
                <Text className="text-tertiary">Envie o comprovante</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Button className="mt-2">
            <Text className="3xl font-bold uppercase">Cadastrar</Text>
          </Button>
        </View>
      </ScrollView>

      {onModal && (
        <Modal title="Calendário" onClose={CloseModalCalendar}>
          <CalendarView />
        </Modal>
      )}

      {onGroup && (
        <Modal
          saveButton
          title="Selecione uma Coleção"
          onClose={CloseModalGroup}
        >
          <GroupCollection />
        </Modal>
      )}
    </View>
  );
}
