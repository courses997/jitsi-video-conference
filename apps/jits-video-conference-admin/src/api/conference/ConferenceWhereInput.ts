import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type ConferenceWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  participants?: ParticipantListRelationFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
