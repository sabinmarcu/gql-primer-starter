import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

import PostCard from '../components/Post';
import Split from '../components/Split';
import { Post } from '../gql.d';
const query = loader('../graphql/post.gql');

const PostElement: React.FC<{ id: number }> = ({ id }) => {
  const { data, error } = useQuery<{ post: Post }>(query, { suspend: true, variables: { where: parseInt(`${id}`) } });
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }
  return <Split>
    <PostCard {...data.post} />
    <PostCard {...data.post} />
    <PostCard {...data.post} />
    <PostCard {...data.post} />
  </Split>;
}

const PostScreen: React.FC<{ path: string, id: number }> = ({ id }) =>
  <React.Suspense
    fallback={<div>Loading...</div>}
  >
    <PostElement id={id} />
  </React.Suspense>;

export const link = "/post/:id";

export default PostScreen;
