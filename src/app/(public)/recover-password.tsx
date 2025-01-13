import { ConfirmationCode } from "@/components/screens/recover-password/confirmation-code";
import { UpdatePassword } from "@/components/screens/recover-password/update-password";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export enum RecoverPasswordStage {
  ENTER_EMAIL,
  CONFIRMATION_CODE,
  CREATE_NEW_PASSWORD,
}

export default function RecoverPassword() {
  const [stage, setStage] = useState<RecoverPasswordStage>(
    RecoverPasswordStage.ENTER_EMAIL
  );

  function goBack() {
    router.back();
  }

  function handleSubmitCodeConfirmation() {
    setStage(RecoverPasswordStage.CONFIRMATION_CODE);
  }

  return (
    <View className="flex-1 w-full mt-40 items-center px-14 justify-between">
      {stage === RecoverPasswordStage.ENTER_EMAIL && (
        <>
          <View className="items-center gap-4">
            <Text className="text-3xl text-primary">Recuperar senha</Text>

            <Text className="text-center">
              Digite o seu e-mail cadastrado para {"\n"} recuperar a sua senha.
            </Text>

            <View className="w-full gap-3">
              <Text className="">E-mail</Text>
              <TextInput
                keyboardType="email-address"
                placeholderTextColor={"#ffffff83"}
                placeholder="Digite seu e-mail"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>
          </View>

          <View className="w-full justify-center items-center mb-16 gap-3">
            <TouchableOpacity
              onPress={handleSubmitCodeConfirmation}
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
        </>
      )}

      {stage === RecoverPasswordStage.CONFIRMATION_CODE && (
        <ConfirmationCode setStage={setStage} />
      )}

      {stage === RecoverPasswordStage.CREATE_NEW_PASSWORD && <UpdatePassword />}
    </View>
  );
}
