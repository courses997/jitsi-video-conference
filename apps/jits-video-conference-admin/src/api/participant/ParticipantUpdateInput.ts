import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";

export type ParticipantUpdateInput = {
  conference?: ConferenceWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
