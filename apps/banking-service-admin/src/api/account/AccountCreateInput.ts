import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  currency?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
