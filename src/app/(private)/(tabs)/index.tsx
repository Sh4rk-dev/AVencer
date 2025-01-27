import HomeView from "@/screens/private/home/home.view";
import { useHomeModel } from "@/screens/private/home/home.model";

export default function Home() {
  const method = useHomeModel();

  return <HomeView {...method} />;
}
