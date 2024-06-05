import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LoanWhereInput = {
  amount?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  interestRate?: FloatNullableFilter;
  loanId?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
