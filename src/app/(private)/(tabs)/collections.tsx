import { Text } from "@/components/text";
import { useCollectionModel } from "@/screens/private/collection/collection.model";
import { CollectionView } from "@/screens/private/collection/collection.view";
import { View } from "lucide-react-native";

export default function Collections() {
  const method = useCollectionModel();

  return <CollectionView {...method} />;
}
