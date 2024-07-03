import { Conference as TConference } from "../api/conference/Conference";

export const CONFERENCE_TITLE_FIELD = "title";

export const ConferenceTitle = (record: TConference): string => {
  return record.title?.toString() || String(record.id);
};
