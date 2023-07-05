import { useQuery, gql } from '@apollo/client';
import Repository from './Repository';

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

function RepositoriesList({ query }) {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { query },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.search.edges.map(({node}) => (
    <Repository node={node} />
  ));
}

export default RepositoriesList;
