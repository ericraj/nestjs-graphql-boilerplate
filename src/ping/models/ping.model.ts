import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'ping' })
export class Ping {
  @Field()
  ok: boolean;

  @Field()
  date: Date;
}
