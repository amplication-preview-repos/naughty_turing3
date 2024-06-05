import { AccountCreateNestedManyWithoutCustomersInput } from "./AccountCreateNestedManyWithoutCustomersInput";
import { LoanCreateNestedManyWithoutCustomersInput } from "./LoanCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  accounts?: AccountCreateNestedManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  loans?: LoanCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
