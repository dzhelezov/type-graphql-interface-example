import { Field, InterfaceType } from 'type-graphql';
import { Extrinsic } from '../extrinsic/extrinsic.model';

@InterfaceType()
export abstract class IExtrinsicOnlyEvent {
  @Field(() => Extrinsic)
  extrinsic!: Extrinsic;
}
