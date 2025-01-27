import { useState } from "react";
import { useRouter } from "expo-router";

import { RecoverPasswordStage } from "@/screens/public/recover-password/recover-password.types";

export function useRecoverPassword() {
  const router = useRouter();

  const [stage, setStage] = useState<RecoverPasswordStage>(
    RecoverPasswordStage.ENTER_EMAIL
  );

  function goBack() {
    router.back();
  }

  function handleSubmitCodeConfirmation() {
    setStage(RecoverPasswordStage.CONFIRMATION_CODE);
  }

  return {
    stage,
    goBack,
    setStage,
    RecoverPasswordStage,
    handleSubmitCodeConfirmation,
  };
}
