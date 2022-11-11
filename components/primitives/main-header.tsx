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
    <nav className="w-full main-layout-header bg-purple-800 fixed top-0">
      <div className="main-layout-header-content flex justify-between items-center px-6 text-white">
        <Link href="/" className="cursor-pointer">
          <div>Logo</div>
        </Link>
        <Link href="/profile" className="cursor-pointer">
          {user.name}
        </Link>
      </div>
    </nav>
  );
};
export default Header;
