import { Mail } from "lucide-react-native";
import { KeyboardAvoidingView, View } from "react-native";

import { useRecoverPassword } from "@/screens/public/recover-password/recover-password.model";
import { UpdatePassword } from "@/screens/public/recover-password/components/update-password";
import { ConfirmationCode } from "@/screens/public/recover-password/components/confirmation-code";

import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

type RecoverPasswordProps = ReturnType<typeof useRecoverPassword>;

export function RecoverPasswordView({
  stage,
  goBack,
  setStage,
  RecoverPasswordStage,
  handleSubmitCodeConfirmation,
}: RecoverPasswordProps) {
  return (
    <KeyboardAvoidingView className="flex-1 w-full mt-40 items-center px-14 justify-between">
      {stage === RecoverPasswordStage.ENTER_EMAIL && (
        <>
          <View className="items-center gap-4">
            <Text className="text-3xl text-primary">Recuperação de conta</Text>

            <Text className="text-center">
              Digite o seu e-mail cadastrado para {"\n"} recuperar a sua senha.
            </Text>
            <Input
              label="E-mail"
              leftIcon={Mail}
              placeholder="Digite seu e-mail"
            />
          </View>

          <View className="w-full justify-center items-center mb-16 gap-3">
            <Button className="mt-5" onPress={handleSubmitCodeConfirmation}>
              <Button.Text>AVANÇAR</Button.Text>
            </Button>

            <Button onPress={goBack} variant="secondary">
              <Button.Text>VOLTAR</Button.Text>
            </Button>
          </View>
        </>
      )}

      {stage === RecoverPasswordStage.CONFIRMATION_CODE && (
        <ConfirmationCode setStage={setStage} />
      )}

      {stage === RecoverPasswordStage.CREATE_NEW_PASSWORD && <UpdatePassword />}
    </KeyboardAvoidingView>
  );
}
