import { User, Post, Tag } from './types.d';

export const users: User[] = [
  {
    id: 1,
    name: 'Sabin Marcu',
    email: 'sabinmarcu@gmail.com',
    avatar: 'https://www.gravatar.com/avatar/4f1f8245510c8b2b2e8fae686ba2e5d1',
  },
  {
    id: 2,
    name: 'Diana Gagean',
    email: 'diana.gagean@gmail.com',
    avatar: 'https://www.gravatar.com/avatar/a2123ccb65bfafc0e85cb69cd23e6d20',
  },
];
export const posts: Post[] = [
  {
    id: 1,
    owner: 1,
    title: 'SM Post 1',
    content: 'Post from Sabin Marcu',
    cover: 'http://placekitten.com/g/200/300',
  },
  {
    id: 2,
    owner: 1,
    title: 'SM Post 2',
    content: 'Post from Sabin Marcu',
    cover: 'http://placekitten.com/g/200/300',
    tags: [1],
  },
  {
    id: 3,
    owner: 2,
    title: 'DG Post 1',
    content: 'Post from Diana Gagean',
    cover: 'http://placekitten.com/g/200/300',
  },
  {
    id: 4,
    owner: 2,
    title: 'DG Post 2',
    content: 'Post from Diana Gagean',
    cover: 'http://placekitten.com/g/200/300',
  },
  {
    id: 5,
    owner: 2,
    title: 'DG Post 3',
    content: 'Post from Diana Gagean',
    cover: 'http://placekitten.com/g/200/300',
  },
  {
    id: 6,
    owner: 2,
    title: 'DG Post 4',
    content: 'Post from Diana Gagean',
    cover: 'http://placekitten.com/g/200/300',
  },
];
export const tags: Tag[] = [
  {
    id: 1,
    name: 'Tag 1',
    related: [2],
  },
  {
    id: 2,
    name: 'Tag 2',
    related: [4],
  },
  {
    id: 3,
    name: 'Tag 3',
    related: [4, 5],
  },
  {
    id: 4,
    name: 'Tag 4',
  },
  {
    id: 5,
    name: 'Tag 5',
  },
];
