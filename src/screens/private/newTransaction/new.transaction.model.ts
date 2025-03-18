import { useState } from "react";

export function useNewTransactionModel() {
  const [onModal, setOnModal] = useState(false);
  const [onGroup, setOnGroup] = useState(false);

  function CloseModalCalendar() {
    return setOnModal((prev) => !prev);
  }

  function CloseModalGroup() {
    return setOnGroup((prev) => !prev);
  }

  return {
    onModal,
    setOnModal,
    CloseModalCalendar,
    onGroup,
    setOnGroup,
    CloseModalGroup,
  };
}
