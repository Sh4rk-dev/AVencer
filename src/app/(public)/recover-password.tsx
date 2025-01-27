import { useRecoverPassword } from "@/screens/public/recover-password/recover-password.model";
import { RecoverPasswordView } from "@/screens/public/recover-password/recover-password.view";

export default function RecoverPassword() {
  const method = useRecoverPassword();

  return <RecoverPasswordView {...method} />;
}
