
import { InterfaceType, Field } from 'type-graphql';
import { Extrinsic } from '../extrinsic/extrinsic.model';

@InterfaceType()
export abstract class IEvent {
  @Field()
  indexInBlock!: number;

  @Field(() => Extrinsic!)
  extrinsicField!: Extrinsic;
}
