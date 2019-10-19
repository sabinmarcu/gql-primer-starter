import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

import UserCard from '../components/User';
import Grid from '../components/Grid';
import { User } from '../gql.d';
const query = loader('../graphql/users.gql');

const UsersList = () => {
  const { data, error } = useQuery<{ users: User[] }>(query, { suspend: true });
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }
  return <Grid>{data.users.map(user => <UserCard {...user} key={user.id} />)}</Grid>
}

const UsersListScreen: React.FC<{ path: string }> = () =>
  <React.Suspense
    fallback={<div>Loading...</div>}
  >
    <UsersList />
  </React.Suspense>;

export const link = "/users";
export const title = "Users";

export default UsersListScreen;
