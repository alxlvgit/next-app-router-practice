import { relations, sql } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const mediaTypeEnum = pgEnum("type", ["image", "video"]);

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 20 }).notNull().unique(),
  avatar: text("avatar").notNull(),
  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  followers: integer("followers"),
});

export const usersRelations = relations(user, ({ many }) => ({
  posts: many(post),
}));

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => user.id)
    .notNull(),
  content: text("content").notNull(),
  date: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  likes: integer("likes"),
  replies: integer("replies"),
});

export const postsRelations = relations(post, ({ one }) => ({
  user: one(user, { fields: [post.userId], references: [user.id] }),
  media: one(media, { fields: [post.id], references: [media.postId] }),
}));

export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .references(() => post.id)
    .notNull(),
  type: mediaTypeEnum("type").notNull(),
  url: text("url").notNull(),
  width: integer("width").notNull(),
  height: integer("height").notNull(),
});
