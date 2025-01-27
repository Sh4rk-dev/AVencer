import { SignInView } from "@/screens/public/sign-in/sign-in.view";
import { useSignInModel } from "@/screens/public/sign-in/sign-in.model";

export default function SignIn() {
  const method = useSignInModel();

  return <SignInView {...method} />;
}
