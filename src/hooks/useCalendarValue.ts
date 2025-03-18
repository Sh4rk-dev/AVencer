import { useState } from "react";

export function useCalendarValue() {
  const [selectedDate, setSelectedDate] = useState("");

  return { selectedDate, setSelectedDate };
}
