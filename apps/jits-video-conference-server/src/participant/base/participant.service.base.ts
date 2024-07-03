/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Participant as PrismaParticipant,
  Conference as PrismaConference,
} from "@prisma/client";

export class ParticipantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParticipantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.participant.count(args);
  }

  async participants(
    args: Prisma.ParticipantFindManyArgs
  ): Promise<PrismaParticipant[]> {
    return this.prisma.participant.findMany(args);
  }
  async participant(
    args: Prisma.ParticipantFindUniqueArgs
  ): Promise<PrismaParticipant | null> {
    return this.prisma.participant.findUnique(args);
  }
  async createParticipant(
    args: Prisma.ParticipantCreateArgs
  ): Promise<PrismaParticipant> {
    return this.prisma.participant.create(args);
  }
  async updateParticipant(
    args: Prisma.ParticipantUpdateArgs
  ): Promise<PrismaParticipant> {
    return this.prisma.participant.update(args);
  }
  async deleteParticipant(
    args: Prisma.ParticipantDeleteArgs
  ): Promise<PrismaParticipant> {
    return this.prisma.participant.delete(args);
  }

  async getConference(parentId: string): Promise<PrismaConference | null> {
    return this.prisma.participant
      .findUnique({
        where: { id: parentId },
      })
      .conference();
  }
}
