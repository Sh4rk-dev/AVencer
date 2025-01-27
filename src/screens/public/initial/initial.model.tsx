import { router } from "expo-router";

import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";

import { InitialSlideOne } from "@/assets/initial-slide-01";
import { InitialSlideTwo } from "@/assets/initial-slide-02";
import { InitialSlideThree } from "@/assets/initial-slide-03";
import { Stage } from "@/screens/public/initial/initial.types";

export function useInitialModel() {
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

  function onSlideChange() {
    pagerRef.current?.setPage(currentStage);

    if (currentStage === Stage.THREE) {
      router.navigate("/sign-in");
    }
  }

  return {
    pagerRef,
    slideItens,
    currentStage,
    onSlideChange,
    setCurrentStage,
  };
}
