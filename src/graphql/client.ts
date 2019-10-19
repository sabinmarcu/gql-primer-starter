import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import config from './config';
import { logObject } from '../utils';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});
const cache = new InMemoryCache({ fragmentMatcher });
const linkConfig = {
  uri: `http://localhost:${config.port}${config.playground}`,
};
const link = new HttpLink(linkConfig);

logObject('Apollo Link Config', linkConfig);
export default new ApolloClient({
  cache,
  link,
});
