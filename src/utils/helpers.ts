import { Post, User } from "../types";
import { db } from "@/db";

export async function getPostsForUser(userId: number): Promise<Post[]> {
  return (await db.query.post.findMany({
    where: (posts, { eq }) => eq(posts.userId, userId),
    with: {
      user: true,
      media: true,
    },
  })) as Post[];
}

export async function getPosts(): Promise<Post[]> {
  return (await db.query.post.findMany({
    with: {
      user: true,
      media: true,
    },
  })) as Post[];
}

export async function getPost(postId: number): Promise<Post> {
  return (await db.query.post.findFirst({
    where: (post, { eq }) => eq(post.id, postId),
    with: {
      user: true,
      media: true,
    },
  })) as Post;
}

export async function getUser(username: string): Promise<User> {
  return (await db.query.user.findFirst({
    where: (users, { eq }) => eq(users.username, username),
  })) as User;
}
