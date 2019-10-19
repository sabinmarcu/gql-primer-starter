import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default gql`${
  readFileSync(
    resolve(
      __dirname,
      'types.gql',
    ),
  )
}`;
