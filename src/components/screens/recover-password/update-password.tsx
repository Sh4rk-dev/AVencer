import { Text } from "@/components/text";
import { TextInput, TouchableOpacity, View } from "react-native";

export function UpdatePassword() {
  return (
    <View className="flex-1 w-full items-center justify-between">
      <View>
        <View className="items-center gap-4">
          <Text className="text-3xl text-primary">Atualizar senha</Text>

          <Text className="text-center">Digite sua nova senha</Text>
        </View>

        <View className="w-full mt-8 gap-3">
          <View className="w-full gap-3">
            <Text className="">Senha</Text>
            <TextInput
              keyboardType="email-address"
              placeholderTextColor={"#ffffff83"}
              placeholder="Digite sua senha"
              className="p-3 border border-primary rounded-md font-normal text-white"
            />
          </View>

          <View className="w-full gap-3">
            <Text className="">Confirmação de senha</Text>
            <TextInput
              keyboardType="email-address"
              placeholderTextColor={"#ffffff83"}
              placeholder="Confirme sua senha"
              className="p-3 border border-primary rounded-md font-normal text-white"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity className="mb-24 w-full bg-primary p-4 rounded-md items-center">
        <Text className="font-bold">ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}
