import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query getRepositories($query: String!, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $cursor) {
      nodes {
        ... on Repository {
          id
          description
          forkCount
          name
          stargazerCount
          url
          licenseInfo {
            name
            url
          }
          issues(filterBy: {states: OPEN}) {
            totalCount
          }
          pullRequests(states: OPEN) {
            totalCount
          }
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
