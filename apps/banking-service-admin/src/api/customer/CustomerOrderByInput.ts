import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
