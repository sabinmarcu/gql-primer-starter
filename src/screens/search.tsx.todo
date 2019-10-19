import React, { useState, useCallback } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';
import {
  TextField,
  Typography,
} from '@material-ui/core';

import PostCard from '../components/Post';
import UserCard from '../components/User';
import TagCard from '../components/Tag';
import Grid from '../components/Grid';
import { SearchType } from '../gql.d';
const query = loader('../graphql/search.gql');

const SearchList: React.FC<{ term: string }> = ({ term }) => {;
  const { data, error } = useQuery<{ search: SearchType[] }>(query, { suspend: true, variables: { term } });
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }
  return (<>
    {data.search.map(({ __typename, id, ...rest }) => {
      switch (__typename) {
        // @ts-ignore
        case 'User': return <UserCard key={`user-${id}`} {...rest} />;
        // @ts-ignore
        case 'Tag': return <TagCard key={`tag-${id}`} {...rest} />;
        // @ts-ignore
        case 'Post': return <PostCard key={`post-${id}`} {...rest} />;
        default: return <div />;
      }
    })}
  </>);
}

const SearchScreen: React.FC<{ path: string }> = () => {
  const [term, setTerm] = useState('')
  const termHandler = useCallback(
    ({ target: { value } }) => setTerm(value),
    [setTerm]
  );
  return (
    <Grid>
      <Typography className="full" variant="h4">Search:</Typography>
      <TextField
        className="full"
        type="search"
        value={term}
        onChange={termHandler}
      />
      <React.Suspense
        fallback={<div>Loading...</div>}
      >
        <SearchList term={term} />
      </React.Suspense>
    </Grid>
  )
};

export const link = "/search";
export const title = "Search";

export default SearchScreen;
