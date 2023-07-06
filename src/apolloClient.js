import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  return { 
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            // Merge the search results of the same query in Apollo's cache.
            keyArgs: ["query"],

            merge(existing = {}, incoming) {
              if(!existing.nodes) return incoming;

              // We don't care for any part of the existing cache...
              const mergedCache = {...incoming};
              
              // ...except for the nodes, which contain the repositories we've already loaded and shown
              const mergedNodes = [...existing.nodes, ...incoming.nodes];
              mergedCache.nodes = mergedNodes;

              return mergedCache;
            },
          }
        }
      }
    }
  }),
});