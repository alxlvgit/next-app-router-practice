"use client";

import { User } from "@/types";
import Image from "next/image";

const CreatePostForm = ({ user }: { user: User }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get("content");
    const media = formData.get("media");
    console.log(content, media);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-neutral-500 rounded-lg px-6 py-4"
    >
      <div className="flex gap-4 items-start pb-4">
        <div className="rounded-full h-12 w-12 overflow-hidden relative">
          <Image
            className="object-cover"
            src={user.avatar}
            alt={user.username}
            priority={true}
            fill={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>{user.username}</div>
          <label className="w-full">
            <input
              className="bg-transparent flex-1 border-none outline-none"
              name="content"
              type="text"
              placeholder="Post a thing..."
              required
            />
          </label>
          <label className="flex">
            <Image
              src={"/attach-media.svg"}
              alt={"attach media"}
              width={20}
              height={20}
              className="w-5 h-5 hover:cursor-pointer transform-gpu active:scale-75 transition-all"
            />
            <input
              className="bg-transparent flex-1 border-none outline-none hidden"
              name="media"
              type="file"
              accept="image/jpeg,image/png,video/mp4,video/quicktime"
              multiple
            />
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <div className="text-neutral-500">Anyone can reply</div>
        <button type="submit" className="border rounded-xl px-4 py-2">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
