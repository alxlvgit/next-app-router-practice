import Post from "@/components/Post";
import { getPosts } from "@/utils/helpers";

export default async function Home() {
  const posts = await getPosts();

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
