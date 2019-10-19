import {
  User as UserType,
  Post as PostType,
  Tag as TagType,
  Maybe,
} from '../schema.d';

export type Change<T, V> = Omit<T, keyof V> & V;

export type User = Change<UserType, {
  posts?: Maybe<Array<Number>>
}>;
export type Post = Change<PostType, {
  owner: Number,
  tags?: Maybe<Array<Number>>
}>;
export type Tag = Change<TagType, {
  related?: Maybe<Array<Number>>,
  posts?: Maybe<Array<Number>>
}>;
