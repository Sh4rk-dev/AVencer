import { useNewTransactionModel } from "@/screens/private/newTransaction/new.transaction.model";
import { NewTransactionView } from "@/screens/private/newTransaction/new.transaction.view";

export default function Adding() {
  const method = useNewTransactionModel();

  return <NewTransactionView {...method} />;
}
