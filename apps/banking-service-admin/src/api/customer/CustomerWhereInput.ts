import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type CustomerWhereInput = {
  accounts?: AccountListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  loans?: LoanListRelationFilter;
  phone?: StringNullableFilter;
};
