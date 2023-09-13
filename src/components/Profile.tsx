import { User } from "@/types";
import Link from "next/link";
import Image from "next/image";

const Profile = ({ user }: { user: User }) => {
  const username = user.username;
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{`${user.firstName} ${user.lastName}`}</h1>
          <p className="text-lg font-light">{username}</p>
        </div>
        <Link href={user.avatar}>
          <div className="w-20 h-20">
            <Image
              src={user.avatar}
              alt={username}
              width={80}
              height={80}
              className="object-cover h-20 w-20 rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="mt-7">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {user.followers} followers
        </p>
      </div>
    </>
  );
};

export default Profile;
