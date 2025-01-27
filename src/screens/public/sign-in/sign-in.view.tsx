import { Image, Pressable, View } from "react-native";

import { colors } from "@/styles/colors";

import { useSignInModel } from "@/screens/public/sign-in/sign-in.model";

import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { Eye, LockKeyhole, LogIn, Mail, Square } from "lucide-react-native";

type SignViewProps = ReturnType<typeof useSignInModel>;

export function SignInView({
  handleSignUp,
  handleRecoverPassword,
}: SignViewProps) {
  return (
    <View className="flex-1 w-full items-center justify-center px-7">
      <Image className="mb-24" source={require("@/assets/logo.png")} />

      <View className="gap-2 w-full">
        <View className="flex-row items-center justify-center gap-2">
          <LogIn size={26} color={colors.primary} />
          <Text className="text-2xl ">Faça seu login</Text>
        </View>

        <Text className=" text-center font-light ">
          Entre com suas informações de {"\n"}cadastro.
        </Text>
      </View>

      <View className="w-full">
        <View className="gap-6 mb-5">
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            leftIcon={Mail}
          />

          <Input
            label="Senha"
            placeholder="Digite Sua senha"
            leftIcon={LockKeyhole}
            rightIcon={Eye}
          />
        </View>

        <View className="flex-row justify-between">
          <View className="flex-row gap-1">
            <Square size={20} color={colors.tertiary} strokeWidth={1} />
            <Text>Lembre-me</Text>
          </View>

          <Pressable onPress={handleRecoverPassword}>
            <Text className="text-primary">Esqueci minha senha</Text>
          </Pressable>
        </View>

        <Button className="mt-5">
          <Button.Text>ENTRAR</Button.Text>
        </Button>

        <View>
          <Pressable onPress={handleSignUp}>
            <Text className="text-center text-primary mt-3">
              Não tem uma conta? Registra-se
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
