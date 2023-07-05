import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './queries';
import Repository from './Repository';

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
