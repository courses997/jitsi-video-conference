import * as graphql from "@nestjs/graphql";
import { CreateConferenceInput } from "../jitsiIntegration/CreateConferenceInput";
import { ConferenceResponse } from "../jitsiIntegration/ConferenceResponse";
import { JitsiIntegrationService } from "./jitsiintegration.service";

export class JitsiIntegrationResolver {
  constructor(protected readonly service: JitsiIntegrationService) {}

  @graphql.Mutation(() => ConferenceResponse)
  async CreateConference(
    @graphql.Args()
    args: CreateConferenceInput
  ): Promise<ConferenceResponse> {
    return this.service.CreateConference(args);
  }

  @graphql.Mutation(() => ConferenceResponse)
  async JoinConference(
    @graphql.Args()
    args: CreateConferenceInput
  ): Promise<ConferenceResponse> {
    return this.service.JoinConference(args);
  }
}
