import React from 'react';
import ApolloClient from './graphql/client';
import { ApolloProvider } from 'react-apollo-hooks';
import { Router } from '@reach/router';

import Layout from './layout';
import routes from './screens';

const App: React.FC = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <Layout>
        <Router>
          {
            // @ts-ignore
            routes.map(({ default: Component, link }) => <Component key={link} path={link} />)
          }
        </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
