
import { Extrinsic } from '../extrinsic/extrinsic.model';
import { ObjectType, Field } from 'type-graphql';
import { IExtrinsicOnlyEvent } from './i-extrinsic-only-event.model';

@ObjectType({ implements: IExtrinsicOnlyEvent })
export class ExtrinsicOnlyEventImpl {
  @Field()
  handle!: string;

  @Field(() => Extrinsic)
  extrinsic!: Extrinsic;
}
