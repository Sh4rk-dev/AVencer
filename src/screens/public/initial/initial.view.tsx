import clsx from "clsx";

import PagerView from "react-native-pager-view";
import { SafeAreaView, View } from "react-native";

import { useInitialModel } from "@/screens/public/initial/initial.model";

import { Text } from "@/components/text";
import { Button } from "@/components/button";

type InitialViewProps = ReturnType<typeof useInitialModel>;

export function InitialView({
  pagerRef,
  slideItens,
  currentStage,
  onSlideChange,
  setCurrentStage,
}: InitialViewProps) {
  return (
    <SafeAreaView className="flex-1 items-center justify-between pb-20 pt-56 px-11">
      <PagerView
        ref={pagerRef}
        onPageSelected={({ nativeEvent }) => {
          const index = nativeEvent.position;
          setCurrentStage(index + 1);
        }}
        style={{ width: "100%", height: 349 }}
      >
        {slideItens.map((item) => (
          <View
            key={item.id}
            className="items-center justify-center gap-6"
            style={{ width: "100%", height: 349 }}
          >
            {item.slideImage}
            <Text className="text-white text-center">{item.text}</Text>
          </View>
        ))}
      </PagerView>

      <View className="flex-row gap-2">
        {slideItens.map((item, index) => (
          <View
            key={item.id}
            className={clsx(
              "size-2 rounded-full",
              currentStage === index + 1 ? "bg-primary" : "bg-secondary"
            )}
          />
        ))}
      </View>

      <Button className="mt-5" onPress={onSlideChange}>
        <Button.Text>AVANÇAR</Button.Text>
      </Button>
    </SafeAreaView>
  );
}
