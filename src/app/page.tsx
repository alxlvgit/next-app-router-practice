import { getPosts } from "@/utils/helpers";
import Post from "@/components/Post";

export default function Home() {
  const posts = getPosts();

  return (
    <main className="mb-24 mt-24 max-w-lg m-auto">
      <div className="flex flex-col divide-y">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
