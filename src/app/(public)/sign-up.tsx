import { SignUpView } from "@/screens/public/sign-up/sign-up.view";
import { useSignUpModel } from "@/screens/public/sign-up/sign-up.model";

export default function SignUp() {
  const method = useSignUpModel();

  return <SignUpView {...method} />;
}
