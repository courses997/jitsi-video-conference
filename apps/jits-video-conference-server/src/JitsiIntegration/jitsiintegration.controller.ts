import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { JitsiIntegrationService } from "./jitsiintegration.service";
import { CreateConferenceInput } from "../jitsiIntegration/CreateConferenceInput";
import { ConferenceResponse } from "../jitsiIntegration/ConferenceResponse";

@swagger.ApiTags("jitsiIntegrations")
@common.Controller("jitsiIntegrations")
export class JitsiIntegrationController {
  constructor(protected readonly service: JitsiIntegrationService) {}

  @common.Post("/create-conference")
  @swagger.ApiOkResponse({
    type: ConferenceResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateConference(
    @common.Body()
    body: CreateConferenceInput
  ): Promise<ConferenceResponse> {
        return this.service.CreateConference(body);
      }

  @common.Post("/join-conference")
  @swagger.ApiOkResponse({
    type: ConferenceResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async JoinConference(
    @common.Body()
    body: CreateConferenceInput
  ): Promise<ConferenceResponse> {
        return this.service.JoinConference(body);
      }
}
