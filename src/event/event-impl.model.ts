import { Extrinsic } from '../extrinsic/extrinsic.model';
import { ObjectType, Field } from 'type-graphql';
import { IEvent } from './i-event.model';

@ObjectType({ implements: IEvent })
export class EventImpl {
  @Field()
  indexInBlock!: number;

  @Field(() => Extrinsic!)
  extrinsicField!: Extrinsic;
}
