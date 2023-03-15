import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// Set up an HTTP link for the Apollo Client
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up an authentication link for the Apollo Client
const authLink = setContext((_, { headers }) => {
  // Get the user's authentication token from local storage
  const token = localStorage.getItem('id_token');

  // Return the headers object with the authorization header added, if a token exists
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }

  // Otherwise, return the original headers object with an empty authorization header
  return {
    headers: {
      ...headers,
      authorization: '',
    },
  };
});

// Export the HTTP and authentication links for the Apollo Client
export { httpLink, authLink };
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
