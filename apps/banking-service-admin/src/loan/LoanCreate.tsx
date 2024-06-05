import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const LoanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="end_date" source="endDate" />
        <NumberInput label="interest_rate" source="interestRate" />
        <TextInput label="loan_id" source="loanId" />
        <DateTimeInput label="start_date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
