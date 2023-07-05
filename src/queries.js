import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query getRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
          }
        }
      }
    }
  }
`;

export { GET_REPOSITORIES };
