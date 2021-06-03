# Bug in generating a GraphQL schema

This repo illustrates an unexpected behavior in generating a GraphQL schema out of a `type-graphl` model.

To reproduce, run

```
yarn && yarn ts-node src/index.ts
```

and inspect `src/schema.gql`. It turns out that the type `EventImpl` does not implement the interface `IEvent` event though it should as declared in `src/event/event-impl.model.ts`. However, if one comments out the field `extrinsicField` the output schema is as expected (`EventImpl implements IEvent`).
