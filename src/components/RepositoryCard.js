import { Card, CardActionArea, CardActions, CardContent, List, Typography } from '@mui/material';
import { StarIcon, RepoForkedIcon, IssueOpenedIcon, GitPullRequestIcon } from '@primer/octicons-react';

import CardListItem from './CardListItem';

export default function RepositoryCard({ node }) {
  const {
    name,
    description,
    url,
    stargazerCount,
    forkCount,
    issues: {
      totalCount: issuesCount,
    },
    pullRequests: {
      totalCount: pullRequestsCount,
    },
  } = node;

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <List style={{ width: '100%' }}>
          <CardListItem IconComponent={StarIcon} count={stargazerCount} text="stars" href={`${url}/stargazers`} />
          <CardListItem IconComponent={RepoForkedIcon} count={forkCount} text="forks" href={`${url}/forks`} />
          <CardListItem IconComponent={IssueOpenedIcon} count={issuesCount} text="open issues" href={`${url}/issues`} />
          <CardListItem IconComponent={GitPullRequestIcon} count={pullRequestsCount} text="open pull requests" href={`${url}/pulls`} />
        </List>
      </CardActions>
    </Card>
  )
};
