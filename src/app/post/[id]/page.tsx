import NotFound from "@/app/not-found";
import Post from "@/components/Post";
import { getPost } from "@/utils/helpers";

const PostPage = ({ params }: { params: { id: number } }) => {
  const postId = params.id;
  const post = getPost(+postId);

  return post ? (
    <main className="mb-24 mt-24 max-w-lg m-auto">
      <div className="flex flex-col">
        <Post post={post} />
      </div>
    </main>
  ) : (
    <NotFound />
  );
};

export default PostPage;
