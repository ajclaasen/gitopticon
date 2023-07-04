import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query getRepositories {
    search(query: "hello world", type: REPOSITORY, first: 10) {
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
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.search.edges.map(({node: { id, name, description }}) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>About this repository:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default RepositoriesList;