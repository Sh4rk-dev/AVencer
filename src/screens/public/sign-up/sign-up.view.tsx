import { Pressable, View } from "react-native";

import {
  Eye,
  Mail,
  User,
  LockKeyhole,
  CalendarDays,
} from "lucide-react-native";

import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { useSignUpModel } from "@/screens/public/sign-up/sign-up.model";
import { ConfirmationCode } from "@/screens/public/sign-up/components/confirmation-code";

type SignUpViewProps = ReturnType<typeof useSignUpModel>;

export function SignUpView({
  SignUpStage,
  stage,
  goBack,
  handleSubmitSignUpForm,
}: SignUpViewProps) {
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
            <Input
              label="Nome completo"
              placeholder="Digite seu nome"
              leftIcon={User}
            />

            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              leftIcon={Mail}
            />
            <Input
              label="Confirme seu e-mail"
              placeholder="Confirme seu e-mail"
              leftIcon={Mail}
            />
            <Input
              label="Data de nascimento"
              placeholder="Escolha uma data"
              leftIcon={CalendarDays}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              leftIcon={LockKeyhole}
              rightIcon={Eye}
            />
            <Input
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              leftIcon={LockKeyhole}
              rightIcon={Eye}
            />
          </View>

          <View className="mt-10 w-full justify-center items-center gap-6">
            <Button onPress={handleSubmitSignUpForm}>
              <Button.Text>CADASTRAR</Button.Text>
            </Button>

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
