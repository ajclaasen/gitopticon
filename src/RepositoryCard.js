import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function RepositoryCard({ node: { name, description, url }}) {
  return (
    <Card>
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
    </Card>
  )
};
