import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import * as path from "path";
import { buildSchema } from "type-graphql";

import { EventResolver } from "./event/i-event.resolver";
import { EventImpl } from "./event/event-impl.model";
import { ExtrinsicOnlyEventImpl } from "./extrinsic-only-event/extrinsic-only-event-impl.model";

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [EventResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    // // provide the type that implements an interface
    // // but is not directly used in schema
    orphanedTypes: [EventImpl, ExtrinsicOnlyEventImpl],
  });

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
