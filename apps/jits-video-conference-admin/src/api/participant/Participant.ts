import { Conference } from "../conference/Conference";

export type Participant = {
  conference?: Conference | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
