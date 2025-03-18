import { TextInput, View } from "react-native";

import { colors } from "@/styles/colors";

import { Text } from "./text";
import { LucideIcon } from "lucide-react-native";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
  rightIcon?: LucideIcon;
  leftIcon?: LucideIcon;
}

export function Input({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...rest
}: InputProps) {
  return (
    <View className="flex-1 items-start relative  gap-4">
      {label && <Text>{label}</Text>}

      <View className="flex-row items-center h-12 px-2 justify-between border border-primary rounded-md">
        <View className="flex-1 flex-row items-center gap-1">
          {LeftIcon && (
            <LeftIcon size={20} color={colors.primary} strokeWidth={1} />
          )}

          <TextInput
            placeholderTextColor={"#ffffff83"}
            className="flex-1 justify-center items-center text-white font-normal"
            {...rest}
          />
        </View>
        {RightIcon && (
          <RightIcon size={20} color={colors.tertiary} strokeWidth={1} />
        )}
      </View>
    </View>
  );
}
