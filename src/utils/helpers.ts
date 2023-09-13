import { Post, User } from "../types";
import { posts, users } from "../fakeDB";

export function getPosts(): Post[] {
  return posts.filter((post) => !post.replyId);
}

export function getPost(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostResponses(id: number): Post[] {
  return posts.filter((post) => post.replyId === id);
}

export function getUser(username: string): User | undefined {
  return users.find((user) => user.username === username);
}

export function getPostsForUser(username: string): Post[] {
  return posts.filter((post) => post.user.username === username);
}
