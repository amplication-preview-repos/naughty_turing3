import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  transactionId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
