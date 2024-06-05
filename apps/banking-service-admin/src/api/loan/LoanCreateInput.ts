import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LoanCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  interestRate?: number | null;
  loanId?: string | null;
  startDate?: Date | null;
};
