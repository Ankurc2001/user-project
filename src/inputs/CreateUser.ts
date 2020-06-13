import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  id: string;

  @Field()
  name: string;
}
