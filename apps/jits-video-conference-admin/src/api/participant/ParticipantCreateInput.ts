import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";

export type ParticipantCreateInput = {
  conference?: ConferenceWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
};
