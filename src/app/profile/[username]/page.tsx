import { getPostsForUser, getUser } from "@/utils/helpers";
import NotFound from "@/app/not-found";
import Post from "@/components/Post";
import Profile from "@/components/Profile";

const ProfilePage = ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const user = getUser(username);
  const posts = getPostsForUser(username);

  return (
    <main className="mb-24 mt-24 max-w-lg m-auto">
      {user ? (
        <div className="flex flex-col">
          <Profile user={user} />
          {posts.length > 0 &&
            posts.map((post) => (
              <>
                <div className="mt-10 border-b">
                  <p className="text-lg mb-2">Posts</p>
                </div>
                <Post key={post.id} post={post} />
              </>
            ))}
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default ProfilePage;
