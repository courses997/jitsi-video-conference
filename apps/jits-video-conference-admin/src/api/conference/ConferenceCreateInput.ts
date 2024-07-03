import { ParticipantCreateNestedManyWithoutConferencesInput } from "./ParticipantCreateNestedManyWithoutConferencesInput";

export type ConferenceCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  participants?: ParticipantCreateNestedManyWithoutConferencesInput;
  startTime?: Date | null;
  title?: string | null;
};
