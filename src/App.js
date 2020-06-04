import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle from './styles/global';
import Launches from './containers/Launches';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  })

  return (
    <ApolloProvider client={ client }>
      <Launches />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
