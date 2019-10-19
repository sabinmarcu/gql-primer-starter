import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
} from '@material-ui/core';
import {
  User,
} from '../gql.d';
import { link } from '../screens/post';
import ReachButton from './ReachButton';

const UserCard = ({
  name,
  email,
  avatar,
  posts,
}: User) => {
  const hasPosts = posts && posts.length > 0;
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={email}
        avatar={
          <Avatar src={avatar} />
        }
      />
      {hasPosts && <CardContent>
        <List>
          {posts && posts.map(({ title, id }) => <ListItem key={id}>
            <ReachButton to={link.replace(':id', `${id}`)}>{title}</ReachButton>
          </ListItem>)}
        </List>
      </CardContent>}
    </Card>
  );
};

export default UserCard;
