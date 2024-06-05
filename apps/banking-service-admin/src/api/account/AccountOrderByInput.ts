import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
