import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './queries';
import InfiniteScroll from 'react-infinite-scroll-component';
import Repository from './Repository';

function RepositoriesList({ query }) {
  const { loading, error, fetchMore, data } = useQuery(GET_REPOSITORIES, {
    variables: { query, cursor: null },
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {
        query,
        cursor: data.search.pageInfo.endCursor
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <InfiniteScroll
    dataLength={data.search.nodes.length}
    next={fetchMoreData}
    hasMore={data.search.pageInfo.hasNextPage}
    loader={<p>Loading more...</p>}
    endMessage={<p>End of results</p>}
  >
    {data.search.nodes.map((node) => (
      <Repository node={node} key={node.id} />
    ))}
  </InfiniteScroll>
    
}

export default RepositoriesList;
