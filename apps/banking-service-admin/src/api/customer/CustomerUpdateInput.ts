import { AccountUpdateManyWithoutCustomersInput } from "./AccountUpdateManyWithoutCustomersInput";
import { LoanUpdateManyWithoutCustomersInput } from "./LoanUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  accounts?: AccountUpdateManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  loans?: LoanUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
