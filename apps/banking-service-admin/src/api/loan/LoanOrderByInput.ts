import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  interestRate?: SortOrder;
  loanId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
