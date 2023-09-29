export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  followers: number | null;
};

export type Media = {
  id: number;
  type: "image" | "video";
  url: string;
  width: number;
  height: number;
};

export type Post = {
  id: number;
  userId: number;
  user: User;
  date: Date;
  content: string;
  likes: number | null;
  replies: number | null;
  replyId?: number;
  media?: Media;
};
