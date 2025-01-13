import {
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LogIn } from "lucide-react-native";
import { Text } from "@/components/text";
import { router } from "expo-router";
import { colors } from "@/styles/colors";

export default function SignIn() {
  function handleSignUp() {
    router.navigate("/sign-up");
  }

  function handleRecoverPassword() {
    router.navigate("/recover-password");
  }

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
          <View className="gap-3">
            <Text className="">E-mail</Text>
            <TextInput
              keyboardType="email-address"
              placeholderTextColor={"#ffffff83"}
              placeholder="Digite seu e-mail"
              className="p-3 border border-primary rounded-md text-white font-normal"
            />
          </View>

          <View className="gap-3">
            <Text className="">Senha</Text>
            <TextInput
              secureTextEntry
              placeholderTextColor={"#ffffff83"}
              placeholder="Digite seu e-mail"
              className="p-3 border border-primary rounded-md font-normal text-white"
            />
          </View>
        </View>

        <View className="flex-row justify-between">
          <Text>Lembre-me</Text>

          <Pressable onPress={handleRecoverPassword}>
            <Text className="text-primary">Esqueci minha senha</Text>
          </Pressable>
        </View>

        <TouchableOpacity className="mt-5 p-3 bg-primary rounded-md">
          <Text className="text-center font-bold">ENTRAR</Text>
        </TouchableOpacity>

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
