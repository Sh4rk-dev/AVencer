import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { BlurView } from "expo-blur";
import { X } from "lucide-react-native";
import {
  ModalProps,
  Modal as RNModal,
  TouchableOpacity,
  View,
} from "react-native";

import Animated, { FadeInDown } from "react-native-reanimated";

type Props = ModalProps & {
  title: string;
  onClose: () => void;
  saveButton?: boolean;
};

export function Modal({
  title,
  onClose,
  children,
  saveButton,
  ...rest
}: Props) {
  return (
    <RNModal transparent animationType="fade" {...rest}>
      <BlurView
        tint="dark"
        intensity={20}
        className="flex-1"
        experimentalBlurMethod="dimezisBlurView"
      >
        <View className="flex-1 justify-end">
          <View className="w-full">
            <Animated.View
              entering={FadeInDown.duration(600)}
              className="border-t border-primary bg-background"
            >
              <View className="flex-row items-center justify-between px-6 pt-4 ">
                <View>
                  <Text className="font-semiBold text-2xl">{title}</Text>
                </View>

                <TouchableOpacity onPress={onClose}>
                  <X color={"#FC5404"} />
                </TouchableOpacity>
              </View>

              {children}

              {saveButton && (
                <Button>
                  <Text className="font-bold text-lg text-white uppercase">
                    Salvar
                  </Text>
                </Button>
              )}
            </Animated.View>
          </View>
        </View>
      </BlurView>
    </RNModal>
  );
}
