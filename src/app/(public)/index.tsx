import { InitialSlideOne } from "@/assets/initial-slide-01";
import { InitialSlideTwo } from "@/assets/initial-slide-02";
import { InitialSlideThree } from "@/assets/initial-slide-03";
import { Text } from "@/components/text";
import clsx from "clsx";
import { useRef, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";

enum Stage {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export default function Initial() {
  const [currentStage, setCurrentStage] = useState(Stage.ONE);
  const pagerRef = useRef<PagerView>(null);

  const slideItens = [
    {
      id: 1,
      slideImage: <InitialSlideOne />,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, modi culpa. Error saepe, eos corporis debitis, quasi deserunt dolorem voluptate inventore voluptas delectus quia ratione aspernatur molestiae illo alias neque.",
    },
    {
      id: 2,
      slideImage: <InitialSlideTwo />,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, modi culpa. Error saepe, eos corporis debitis, quasi deserunt dolorem voluptate inventore voluptas delectus quia ratione aspernatur molestiae illo alias neque.",
    },
    {
      id: 3,
      slideImage: <InitialSlideThree />,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, modi culpa. Error saepe, eos corporis debitis, quasi deserunt dolorem voluptate inventore voluptas delectus quia ratione aspernatur molestiae illo alias neque.",
    },
  ];

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
        {slideItens.map((_, index) => (
          <View
            className={clsx(
              "size-2 rounded-full",
              currentStage === index + 1 ? "bg-primary" : "bg-secondary"
            )}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => pagerRef.current?.setPage(currentStage)}
        className="bg-primary w-full items-center justify-center rounded-md h-12 max-h-12"
      >
        <Text className="text-white font-bold">Avançar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
