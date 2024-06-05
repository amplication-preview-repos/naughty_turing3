import { Customer } from "../customer/Customer";

export type Loan = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  interestRate: number | null;
  loanId: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
