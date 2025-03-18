import { View } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react-native";

import { useCalendarValue } from "@/hooks/useCalendarValue";

import { ConfigurationCalendar } from "@/components/calendar/configurationCalendar";

LocaleConfig.locales["pt-br"] = ConfigurationCalendar;
LocaleConfig.defaultLocale = "pt-br";

export function CalendarView() {
  const { selectedDate, setSelectedDate } = useCalendarValue();

  console.log(selectedDate, "- component calendar");

  return (
    <View>
      <Calendar
        style={{ marginTop: 20, marginBottom: 40 }}
        renderArrow={(direction) => (
          <View>
            {direction === "left" ? (
              <ArrowBigLeft color={"#FC5404"} />
            ) : (
              <ArrowBigRight color={"#FC5404"} />
            )}
          </View>
        )}
        theme={{
          dayTextColor: "#FFF",
          todayTextColor: "#FC5404",
          monthTextColor: "#FC5404",
          backgroundColor: "#1E1E1E",
          calendarBackground: "#1E1E1E",
          textSectionTitleColor: "#FC5404",
          textDisabledColor: "#3A3A3A",
        }}
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "#FC5404",
          },
        }}
      />
    </View>
  );
}
