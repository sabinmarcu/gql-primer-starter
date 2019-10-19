import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

import TagCard from '../components/Tag';
import Grid from '../components/Grid';
import { Tag } from '../gql.d';
const query = loader('../graphql/tags.gql');

const TagsList = () => {
  const { data, error } = useQuery<{ tags: Tag[] }>(query, { suspend: true });
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }
  return <Grid>{data.tags.map(tag => <TagCard {...tag} key={tag.id} />)}</Grid>
}

const TagsListScreen: React.FC<{ path: string }> = () =>
  <React.Suspense
    fallback={<div>Loading...</div>}
  >
    <TagsList />
  </React.Suspense>;

export const link = "/tags";
export const title = "Tags";

export default TagsListScreen;
