import { db } from "@/db";
import { user, post, media } from "@/db/schema";

const seedDb = async () => {
    await db.insert(user).values([
      {
        username: "sam",
        avatar: "https://picsum.photos/seed/picsum/200/300",
        firstName: "sam",
        lastName: "sam",
        followers: 100,
      },
      {
        username: "jane",
        avatar: "https://picsum.photos/seed/picsum/200/300",
        firstName: "Jane",
        lastName: "Doe",
        followers: 100,
      },
    ]);

  await db.insert(post).values([
    {
      userId: 3,
      content:
        "Just some content to get us started. This is a post with some content. It's not very interesting, but it's a post.",
      likes: 10,
      replies: 0,
    },
    {
      userId: 3,
      content: "This one is slightly more interesting. It has an image.",
      likes: 10,
      replies: 0,
    },
    {
      userId: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 12,
      replies: 0,
    },
    {
      userId: 4,
      content: "This is a post by Sam.",
      likes: 12,
      replies: 0,
    },
  ]);

  await db.insert(media).values([
    {
      postId: 14,
      type: "image",
      url: "https://picsum.photos/seed/picsum/200/300",
      width: 200,
      height: 300,
    },
    {
      postId: 15,
      type: "image",
      url: "https://picsum.photos/seed/picsum/200/300",
      width: 200,
      height: 200,
    },
  ]);
};

seedDb();
