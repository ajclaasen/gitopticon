import { useQuery, gql } from '@apollo/client';

import './App.css';

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

function DisplayRepositories() {
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <DisplayRepositories />
      </header>
    </div>
  );
}

export default App;
