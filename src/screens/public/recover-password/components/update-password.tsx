import { View } from "react-native";

import { Eye, LockKeyhole } from "lucide-react-native";

import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export function UpdatePassword() {
  return (
    <View className="flex-1 w-full items-center justify-between">
      <View>
        <View className="items-center gap-4">
          <Text className="text-3xl text-primary">Atualizar senha</Text>

          <Text className="text-center">Digite sua nova senha</Text>
        </View>

        <View className="w-full mt-8 gap-3">
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            leftIcon={LockKeyhole}
            rightIcon={Eye}
          />

          <Input
            label="Confirmação de senha"
            placeholder="Confirme sua senha"
            leftIcon={LockKeyhole}
            rightIcon={Eye}
          />
        </View>
      </View>

      <Button className="mb-24">
        <Button.Text>ATUALIZAR</Button.Text>
      </Button>
    </View>
  );
}
