import { ObjectType, Field } from 'type-graphql';
import { EventImpl } from '../event/event-impl.model';
import { ExtrinsicOnlyEventImpl } from '../extrinsic-only-event/extrinsic-only-event-impl.model';

@ObjectType()
export class Extrinsic {
  @Field(() => String!)
  hash!: string;

  @Field(() => [ExtrinsicOnlyEventImpl])
  field1?: ExtrinsicOnlyEventImpl[];

  @Field(() => [EventImpl])
  field2?: EventImpl[];
}

