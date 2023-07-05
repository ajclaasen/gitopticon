import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query getRepositories($query: String!, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $cursor) {
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          forkCount
          issues(filterBy: {states: OPEN}) {
            totalCount
          }
          pullRequests(states: OPEN) {
            totalCount
          }
          description
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export { GET_REPOSITORIES };
