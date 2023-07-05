import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query getRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
`;

export { GET_REPOSITORIES };
