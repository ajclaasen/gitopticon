import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from the local storage if it exists
  const token = process.env.REACT_APP_GITHUB_API_KEY;
  // return the headers to the context so httpLink can read them
  return { 
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            keyArgs: ["query"],

            // Merge the search results of the same query in Apollo's cache.
            // This occurs when using infinite scroll or pagination.
            merge(existing = {}, incoming) {
              if(!existing.nodes) return incoming;

              // This overwrites any existing fields that match with an incoming one, such as pageInfo
              const merged = {...existing, ...incoming};
              
              const mergedNodes = [...existing.nodes, ...incoming.nodes];
              merged.nodes = mergedNodes

              return merged;
            },
          }
        }
      }
    }
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
