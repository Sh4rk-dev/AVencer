import { InitialView } from "@/screens/public/initial/initial.view";
import { useInitialModel } from "@/screens/public/initial/initial.model";

export default function Initial() {
  const method = useInitialModel();

  return <InitialView {...method} />;
}
