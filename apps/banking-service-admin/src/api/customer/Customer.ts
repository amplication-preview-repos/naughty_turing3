import { Account } from "../account/Account";
import { Loan } from "../loan/Loan";

export type Customer = {
  accounts?: Array<Account>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstname: string | null;
  id: string;
  lastname: string | null;
  loans?: Array<Loan>;
  phone: string | null;
  updatedAt: Date;
};
