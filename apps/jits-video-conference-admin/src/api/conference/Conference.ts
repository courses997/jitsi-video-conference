import { Participant } from "../participant/Participant";

export type Conference = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  participants?: Array<Participant>;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
};
