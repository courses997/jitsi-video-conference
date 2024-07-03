import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  conferenceId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
