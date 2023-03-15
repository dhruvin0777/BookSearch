import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Auth from './utils/auth'

const token = Auth.getToken();

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3001/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
