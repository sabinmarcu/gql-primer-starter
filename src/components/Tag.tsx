import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
} from '@material-ui/core';
import {
  Tag,
} from '../gql.d';

const TagCard = ({
  name,
  related,
}: Tag) => {
  const hasRelated = related && related.length > 0;
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <div>
          <Typography variant="h6" component="h4">{hasRelated ? 'Related Tags:' : 'No Related Tags'}</Typography>
          {related && related.map(({ name, id }: Tag) => <Chip key={id} label={name} />)}
        </div>
      </CardContent>
    </Card>
  );
};

export default TagCard;
