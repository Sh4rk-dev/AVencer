import { ReactNode } from "react";
import { Pressable, View } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text } from "@/components/text";
import { ArrowLeft } from "lucide-react-native";

interface CustomHeaderProps extends Partial<NativeStackHeaderProps> {
  hasBack?: boolean;
  rightIcon?: ReactNode;
}

export function CustomHeader({
  options,
  rightIcon,
  navigation,
  hasBack = true,
}: CustomHeaderProps) {
  return (
    <View className="w-full flex-row items-center">
      {hasBack ? (
        <Pressable testID="back-button" onPress={() => navigation?.goBack()}>
          <ArrowLeft size={30} color="#660000" />
        </Pressable>
      ) : (
        <View className="w-3" />
      )}
      <Text className="text-primary-colo font-poppinsSemiBold text-2xl font-semibold text-primary-color">
        {options?.title}
      </Text>
      {rightIcon ? (
        <View testID="custom-right-icon">{rightIcon}</View>
      ) : (
        <View className="h-7 w-7" />
      )}
    </View>
  );
}
