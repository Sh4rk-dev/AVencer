import { useHistoryModel } from "@/screens/private/history/history.model";
import { HistoryView } from "@/screens/private/history/history.view";

export default function History() {
  const method = useHistoryModel();
  return <HistoryView {...method} />;
}
