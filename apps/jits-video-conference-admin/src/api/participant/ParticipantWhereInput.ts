import { ConferenceWhereUniqueInput } from "../conference/ConferenceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ParticipantWhereInput = {
  conference?: ConferenceWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
