import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Transaction"
          target="accountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="transaction_id" source="transactionId" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
