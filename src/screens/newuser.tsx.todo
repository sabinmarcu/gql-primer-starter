import React, { useState, useMemo } from 'react';
import { navigate } from '@reach/router';
import { loader } from 'graphql.macro';
import { useMutation } from 'react-apollo-hooks';

import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
} from '@material-ui/core';

import Split from '../components/Split';
import UserCard from '../components/User';
import { link as usersLink } from './users';
const query = loader('../graphql/newuser.gql');
const refetchQuery = loader('../graphql/users.gql');

const NewUserScreen: React.FC<{ path: string }> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const isValid = useMemo(
    () => name.length * email.length > 0,
    [name, email],
  );
  console.log(refetchQuery)
  const [addUser] = useMutation(query, {
    variables: {
      name,
      email,
      avatar,
    },
    update() {
      navigate(usersLink);
    },
  })
  return (
    <Split>
      <Card>
        <CardHeader title='New User' subheader="Enter email and name (avatar optional)" />
        <CardContent>
          <TextField fullWidth label="name" value={name} onChange={({ target: { value }}) => setName(value)} required />
          <TextField fullWidth label="email" value={email} onChange={({ target: { value } }) => setEmail(value)} required type="email" />
          <TextField fullWidth label="avatar" value={avatar} onChange={({ target: { value } }) => setAvatar(value)} />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            disabled={!isValid}
            onClick={() => isValid && addUser()}
          >Submit</Button>
        </CardActions>
      </Card>
      {isValid && <UserCard {...{ id: -1, name, email, avatar }} />}
    </Split>
  );
}

export const link = "/users/new";
export const title = "New User";

export default NewUserScreen;
