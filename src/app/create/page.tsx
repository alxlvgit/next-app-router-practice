import CreatePostForm from "@/components/CreatePostForm";
import { getUser } from "@/utils/helpers";

const Create = () => {
  const user = getUser("sam");
  return (
    <main className="mb-24 mt-24 max-w-lg m-auto">
      <CreatePostForm user={user!} />
    </main>
  );
};

export default Create;
