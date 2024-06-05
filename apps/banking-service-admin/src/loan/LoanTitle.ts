import { Loan as TLoan } from "../api/loan/Loan";

export const LOAN_TITLE_FIELD = "loanId";

export const LoanTitle = (record: TLoan): string => {
  return record.loanId?.toString() || String(record.id);
};
