import { Text } from "@/components/text";
import { Check, Square } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

interface GroupCollectionProps {
  group: {
    id: string;
    title: string;
  };
}

export function CardCollection({ group }: GroupCollectionProps) {
  return (
    <TouchableOpacity
      className="w-full p-4 bg-secondary rounded-md flex-row items-center justify-between"
      key={group.id}
    >
      <Text>{group.title}</Text>
      <Square size={20} color={"#FC5404"} />
    </TouchableOpacity>
  );
}
