import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const linkClasses =
    "dark:hover:bg-neutral-900 hover:bg-neutral-100 h-14 w-20 flex justify-center items-center align-middle stroke-neutral-600 transition-all fill-none rounded-md";
  return (
    <header className="fixed left-0 top-0 bottom-0 h-20 z-50 w-full bg-white/80 backdrop-blur-xl dark:bg-black/80">
      <nav className="flex justify-center h-full items-center align-middle">
        <Link href="/" className={linkClasses}>
          <Image
            src="/home.svg"
            alt="home"
            className="w-7 h-7"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/search" className={linkClasses}>
          <Image
            src="/search.svg"
            alt="search"
            className="w-7 h-7"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/create" className={linkClasses}>
          <Image
            src="/create-post.svg"
            alt="create"
            className="w-7 h-7"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/activity" className={linkClasses}>
          <Image
            src="/notifications.svg"
            alt="activity"
            className="w-7 h-7"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/profile/sam" className={linkClasses}>
          <Image
            src="/profile.svg"
            alt="profile"
            className="w-7 h-7"
            width={50}
            height={50}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
