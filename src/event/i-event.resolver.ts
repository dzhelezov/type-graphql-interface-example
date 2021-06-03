import { Query, Resolver, Info } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { IEvent } from './i-event.model';

@Resolver()
export class EventResolver {
  @Query(() => [IEvent])
  async events(
    // @Args() { where, orderBy, limit, offset }: EventXWhereArgs,
    @Info() info?: GraphQLResolveInfo | string
  ): Promise<IEvent[]> {
    return [];
  }
}
