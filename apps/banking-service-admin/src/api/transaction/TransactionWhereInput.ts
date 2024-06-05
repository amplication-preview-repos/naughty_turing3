import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  account?: AccountWhereUniqueInput;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  transactionId?: StringNullableFilter;
  typeField?: "Option1";
};
