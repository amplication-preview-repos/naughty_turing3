import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const LoanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Loans"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
