import { Post } from "../types";
import Image from "next/image";
import Link from "next/link";

const Post = ({ post }: { post: Post }) => {
  const daysAgo = Math.round(
    (new Date().getTime() - new Date(post.date).getTime()) / (1000 * 3600 * 24)
  );
  const iconClasses =
    "w-9 h-9 hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center align-middle rounded-full transition-all";

  return (
    <article className="flex flex-col gap-4 py-4">
      <div className="flex gap-4 items-start">
        <Link href={`/profile/${post.user.username}`}>
          <div className="w-10 h-10">
            <Image
              src={post.user.avatar}
              alt={post.user.username}
              width={40}
              height={40}
              className="object-cover h-10 w-full rounded-full"
              sizes="100vw"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <Link href={`/profile/${post.user.username}`}>
              <p>{post.user.username}</p>
            </Link>
            <p className="dark:text-neutral-400 text-neutral-600">
              {daysAgo === 0 ? "Today" : `${daysAgo}d`}
            </p>
          </div>
          <Link href={`/post/${post.id}`}>
            <p className="font-light">{post.content}</p>
          </Link>
          {post.media && (
            <Image
              src={post.media.url}
              alt={post.user.username}
              width={post.media.width}
              height={post.media.height}
              className="rounded-xl"
            />
          )}
          <div className="flex -ml-2">
            <div className={iconClasses}>
              <Image src={"/like.svg"} alt={"like"} width={24} height={24} />
            </div>
            <div className={iconClasses}>
              <Image
                src={"/new-message.svg"}
                alt={"reply"}
                width={24}
                height={24}
              />
            </div>
            <div className={iconClasses}>
              <Image src={"/repost.svg"} alt={"share"} width={24} height={24} />
            </div>
            <div className={iconClasses}>
              <Image
                src={"/share.svg"}
                alt={"bookmark"}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          {post.likes} likes
        </p>
        <p>·</p>
        <p className="text-neutral-600 dark:text-neutral-400">
          {post.replies} replies
        </p>
      </div>
    </article>
  );
};

export default Post;
