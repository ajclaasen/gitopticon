import { render, screen } from '@testing-library/react';
import RepositoryQueryResults from './RepositoryQueryResults';
import { GET_REPOSITORIES } from '../queries';
import { MockedProvider } from "@apollo/client/testing";
import { InMemoryCache } from '@apollo/client';

const mocks = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: {
        query: 'hello',
        cursor: null,
      },
    },
    result: {
      data: {
        search: {
          nodes: [
            {
              id: 'hello-1',
              name: 'Hello World',
              description: 'Hallo mooie wereld!',
              licenseInfo: null,
              issues: { totalCount: 12 },
              pullRequests: { totalCount: 13 },
              forkCount: 21,
              stargazerCount: 31,
              url: "https://localhost:3000",
              __typename: "Repository",
            },
          ],
          pageInfo: {
            endCursor: 'hello-1',
            hasNextPage: false,
          },
        },
      },
    },
  },
]

test('renders a repository title', async () => {
  const cache = new InMemoryCache();

  render(
    <MockedProvider mocks={mocks} cache={cache}>
      <RepositoryQueryResults query={'hello'} />
    </MockedProvider>
  );

  const titleElement = await screen.findByText(/hello world/i);

  expect(titleElement).toBeInTheDocument();
});
