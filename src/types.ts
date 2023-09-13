export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  followers: number;
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
  user: User;
  date: string;
  content: string;
  likes: number;
  replies: number;
  replyId?: number;
  media?: Media;
};
