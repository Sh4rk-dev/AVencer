import { ConfirmationCode } from "@/components/screens/sign-up/confirmation-code";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";

enum SignUpStage {
  REGISTER,
  CONFIRMATION_CODE,
}

export default function SignUp() {
  const [stage, setStage] = useState<SignUpStage>(SignUpStage.REGISTER);

  function goBack() {
    router.navigate("/sign-in");
  }

  function handleSubmitSignUpForm() {
    setStage(SignUpStage.CONFIRMATION_CODE);
  }

  return (
    <View className="flex-1 w-full justify-center items-center px-10">
      {stage === SignUpStage.REGISTER && (
        <>
          <View className="gap-4 items-center">
            <Text className="text-primary text-2xl">Faça seu registro</Text>

            <Text className="text-center font-light">
              Digite suas informações e realize o cadastro no {"\n"}aplicativo.
            </Text>
          </View>

          <View className="w-full mt-8 gap-3">
            <View className="gap-3">
              <Text className="">Nome completo</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="Digite seu nome"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>

            <View className="gap-3">
              <Text className="">E-mail</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="Digite seu e-mail"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>

            <View className="gap-3">
              <Text className="">Confirme seu e-mail</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="Digite seu e-mail novamente"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>

            <View className="gap-3">
              <Text className="">Data de nascimento</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="00/00/0000"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>

            <View className="gap-3">
              <Text className="">Senha</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="Digite sua senha"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>

            <View className="gap-3">
              <Text className="">Confirmação de senha</Text>
              <TextInput
                secureTextEntry
                placeholderTextColor={"#ffffff83"}
                placeholder="Confirme sua senha"
                className="p-3 border border-primary rounded-md font-normal text-white"
              />
            </View>
          </View>

          <View className="mt-10 w-full justify-center items-center gap-6">
            <TouchableOpacity
              onPress={handleSubmitSignUpForm}
              className=" bg-primary w-full p-4 rounded-md"
            >
              <Text className="text-center font-bold">CADASTRAR</Text>
            </TouchableOpacity>

            <Pressable onPress={goBack}>
              <Text className="text-primary">
                Já tem uma conta? Fazer login
              </Text>
            </Pressable>
          </View>
        </>
      )}

      {stage === SignUpStage.CONFIRMATION_CODE && <ConfirmationCode />}
    </View>
  );
}
