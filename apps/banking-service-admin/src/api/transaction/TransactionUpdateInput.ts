import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  amount?: number | null;
  date?: Date | null;
  transactionId?: string | null;
  typeField?: "Option1" | null;
};
