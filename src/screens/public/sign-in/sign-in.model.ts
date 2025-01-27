import { useRouter } from "expo-router";

export function useSignInModel() {
  const router = useRouter();

  function handleSignUp() {
    router.navigate("/sign-up");
  }

  function handleRecoverPassword() {
    router.navigate("/recover-password");
  }

  return { handleSignUp, handleRecoverPassword };
}
