import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_of_birth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="firstname" source="firstname" />
        <TextField label="ID" source="id" />
        <TextField label="lastname" source="lastname" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="customerId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="account_number" source="accountNumber" />
            <TextField label="account_type" source="accountType" />
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Loan" target="customerId" label="Loans">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="end_date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="interest_rate" source="interestRate" />
            <TextField label="loan_id" source="loanId" />
            <TextField label="start_date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
