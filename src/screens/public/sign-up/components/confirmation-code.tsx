import { Pressable, TextInput, View } from "react-native";

import { Text } from "@/components/text";

export function ConfirmationCode() {
  return (
    <View className="flex-1 w-full px-7 mt-40 items-center">
      <View className="items-center gap-4">
        <Text className="text-3xl text-primary">Código de confirmação</Text>
        <Text className="text-center">
          Digite o código que chegou no seu e-mail {"\n"} para realizar a
          verificação.
        </Text>
      </View>

      <View className="justify-center items-center mt-24">
        <View className="flex-row gap-3">
          <TextInput
            maxLength={1}
            secureTextEntry
            placeholderTextColor={"#ffffff"}
            keyboardType="numeric"
            className="size-20 text-center rounded-xl bg-secondary font-semiBold text-4xl text-white"
            placeholder="-"
          />
          <TextInput
            maxLength={1}
            secureTextEntry
            placeholderTextColor={"#ffffff"}
            keyboardType="numeric"
            className="size-20 text-center rounded-xl bg-secondary font-semiBold text-4xl text-white"
            placeholder="-"
          />
          <TextInput
            maxLength={1}
            secureTextEntry
            placeholderTextColor={"#ffffff"}
            keyboardType="numeric"
            className="size-20 text-center rounded-xl bg-secondary font-semiBold text-4xl text-white"
            placeholder="-"
          />
          <TextInput
            maxLength={1}
            secureTextEntry
            placeholderTextColor={"#ffffff"}
            keyboardType="numeric"
            className="size-20 text-center rounded-xl bg-secondary font-semiBold text-4xl text-white"
            placeholder="-"
          />
        </View>

        <View className=" mt-9 flex-row items-center justify-center">
          <Text>Não recebeu o código? </Text>

          <Pressable className="">
            <Text className="text-primary underline">Reenviar o código</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
