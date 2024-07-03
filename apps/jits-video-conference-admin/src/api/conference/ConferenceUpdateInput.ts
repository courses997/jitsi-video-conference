import { ParticipantUpdateManyWithoutConferencesInput } from "./ParticipantUpdateManyWithoutConferencesInput";

export type ConferenceUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  participants?: ParticipantUpdateManyWithoutConferencesInput;
  startTime?: Date | null;
  title?: string | null;
};
