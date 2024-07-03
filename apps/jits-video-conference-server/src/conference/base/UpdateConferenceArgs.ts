/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConferenceWhereUniqueInput } from "./ConferenceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConferenceUpdateInput } from "./ConferenceUpdateInput";

@ArgsType()
class UpdateConferenceArgs {
  @ApiProperty({
    required: true,
    type: () => ConferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConferenceWhereUniqueInput)
  @Field(() => ConferenceWhereUniqueInput, { nullable: false })
  where!: ConferenceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConferenceUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConferenceUpdateInput)
  @Field(() => ConferenceUpdateInput, { nullable: false })
  data!: ConferenceUpdateInput;
}

export { UpdateConferenceArgs as UpdateConferenceArgs };