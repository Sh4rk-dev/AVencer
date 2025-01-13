import { RecoverPasswordStage } from "@/app/(public)/recover-password";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";

interface ConfirmationCodeProps {
  setStage: React.Dispatch<React.SetStateAction<RecoverPasswordStage>>;
}

export function ConfirmationCode({ setStage }: ConfirmationCodeProps) {
  function goBack() {
    router.back();
  }

  function handleCreateNewPassword() {
    setStage(RecoverPasswordStage.CREATE_NEW_PASSWORD);
  }

  return (
    <View className="flex-1 w-full">
      <View className="flex-1 items-center">
        <View className="items-center">
          <Text className="text-3xl text-primary w-full">
            Código de confirmação
          </Text>

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

      <View className="w-full justify-center items-center mb-16 gap-3">
        <TouchableOpacity
          onPress={handleCreateNewPassword}
          className="w-full bg-primary p-4 rounded-md items-center"
        >
          <Text className="font-bold">ENVIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goBack}
          className="w-full border border-primary p-4 rounded-md items-center"
        >
          <Text className="font-bold">VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
