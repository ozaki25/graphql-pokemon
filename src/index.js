import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolver from './resolver';

const server = new ApolloServer({ typeDefs, resolver });

server.listen().then(({ url }) => {
  console.log(`GraphQL-Pokemon started on ${url}`);
});
