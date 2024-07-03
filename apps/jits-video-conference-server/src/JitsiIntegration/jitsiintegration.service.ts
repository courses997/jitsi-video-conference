import { Injectable } from "@nestjs/common";
import { CreateConferenceInput } from "../jitsiIntegration/CreateConferenceInput";
import { ConferenceResponse } from "../jitsiIntegration/ConferenceResponse";

@Injectable()
export class JitsiIntegrationService {
  constructor() {}
  async CreateConference(args: CreateConferenceInput): Promise<ConferenceResponse> {
    throw new Error("Not implemented");
  }
  async JoinConference(args: CreateConferenceInput): Promise<ConferenceResponse> {
    throw new Error("Not implemented");
  }
}
