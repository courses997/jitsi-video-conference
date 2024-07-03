import { Module } from "@nestjs/common";
import { JitsiIntegrationService } from "./jitsiintegration.service";
import { JitsiIntegrationController } from "./jitsiintegration.controller";
import { JitsiIntegrationResolver } from "./jitsiintegration.resolver";

@Module({
  controllers: [JitsiIntegrationController],
  providers: [JitsiIntegrationService, JitsiIntegrationResolver],
  exports: [JitsiIntegrationService],
})
export class JitsiIntegrationModule {}
