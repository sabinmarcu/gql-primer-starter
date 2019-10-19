import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './types';

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
  },
});
