import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Tooltip,
} from '@material-ui/core';
import {
  Post,
  Tag,
} from '../gql.d';
import { link as tagsLink } from '../screens/tags';
import { link as postLink } from '../screens/post';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const TagChip = ({ name, id }: Tag) => <Chip key={id} label={name} onClick={() => navigate(tagsLink)} />;

const PostCard = ({
  id,
  title,
  content,
  cover,
  tags,
}: Post) => {
  const styles = useStyles();
  const hasTags = tags && tags.length > 0;
  const linkHandler = useCallback(
    () => navigate(postLink.replace(':id', `${id}`)),
    [id],
  );
  return (
    <Card>
      <CardActionArea onClick={linkHandler}>
        <CardMedia
          className={styles.media}
          image={cover}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        </CardActionArea>
      {hasTags && <CardContent>
        {tags && tags.map(({ related, ...rest }: Tag) => related
          ? <Tooltip key={rest.id} title={`Related: ${related.map(({ name }) => name).join(', ')}`}><span><TagChip {...rest} /></span></Tooltip>
          : <TagChip key={rest.id} {...rest} />
        )}
      </CardContent>}
    </Card>
  );
};

export default PostCard;
