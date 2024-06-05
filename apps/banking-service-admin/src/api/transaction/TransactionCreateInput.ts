import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionCreateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  date?: Date | null;
  transactionId?: string | null;
  typeField?: "Option1" | null;
};
