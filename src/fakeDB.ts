import { Post, User } from "@/types";

export const users: User[] = [
  {
    id: 1,
    username: "sam",
    avatar: "https://picsum.photos/seed/picsum/200/300",
    firstName: "saM",
    lastName: "saM",
    followers: 100,
  },
  {
    id: 2,
    username: "jane",
    avatar: "https://picsum.photos/seed/picsum/200/300",
    firstName: "Jane",
    lastName: "Doe",
    followers: 100,
  },
];

export const posts: Post[] = [
  {
    id: 1,
    user: users[1],
    date: "2023-08-01T12:00:00.000Z",
    content:
      "Just some content to get us started. This is a post with some content. It's not very interesting, but it's a post.",
    likes: 10,
    replies: 0,
  },
  {
    id: 2,
    user: users[1],
    date: "2023-04-01T12:00:00.000Z",
    content: "This one is slightly more interesting. It has an image.",
    likes: 10,
    replies: 0,
    media: {
      id: 1,
      type: "image",
      url: "https://picsum.photos/seed/picsum/200/300",
      width: 200,
      height: 300,
    },
  },
  {
    id: 3,
    user: users[1],
    date: "2023-02-01T12:00:00.000Z",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 12,
    replies: 0,
  },
  {
    id: 4,
    user: users[0],
    date: "2023-01-01T12:00:00.000Z",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 12,
    replies: 0,
    media: {
      id: 2,
      type: "image",
      url: "https://picsum.photos/seed/picsum/200/300",
      width: 200,
      height: 200,
    },
  },
];
