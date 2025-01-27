import { useState } from "react";

import { useRouter } from "expo-router";

import { SignUpStage } from "@/screens/public/sign-up/sign-up.types";

export function useSignUpModel() {
  const router = useRouter();

  const [stage, setStage] = useState<SignUpStage>(SignUpStage.REGISTER);

  function goBack() {
    router.navigate("/sign-in");
  }

  function handleSubmitSignUpForm() {
    setStage(SignUpStage.CONFIRMATION_CODE);
  }

  return {
    stage,
    goBack,
    SignUpStage,
    handleSubmitSignUpForm,
  };
}
