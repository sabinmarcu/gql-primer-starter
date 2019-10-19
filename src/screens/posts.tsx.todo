import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

import PostCard from '../components/Post';
import Grid from '../components/Grid';
import { Post } from '../gql.d';
const query = loader('../graphql/posts.gql');

const PostList = () => {
  const { data, error } = useQuery<{ posts: Post[] }>(query, { suspend: true });
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }
  return <Grid>{data.posts.map(post => <PostCard {...post} key={post.id} />)}</Grid>
}

const PostsListScreen: React.FC<{ path: string }> = () =>
  <React.Suspense
    fallback={<div>Loading...</div>}
  >
    <PostList />
  </React.Suspense>;

export const link = "/";
export const title = "Posts";

export default PostsListScreen;
