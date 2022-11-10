import Link from "next/link";
import { use } from "react";

const getUser = async (id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  return user.json();
};

const Header = () => {
  const user = use(getUser(1));
  return (
    <nav className="flex justify-between items-center px-6 main-layout-header sticky top-0 bg-teal-900 text-white">
      <Link href="/" className="cursor-pointer">
        <div>Logo</div>
      </Link>
      <Link href="/profile" className="cursor-pointer">
        {user.name}
      </Link>
    </nav>
  );
};
export default Header;
