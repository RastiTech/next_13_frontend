import Link from 'next/link';
import { use } from 'react';

const getUser = async (id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store',
  });
  return user.json();
};

const Footer = () => {
  const user = use(getUser(1));
  return (
    <nav className="w-full bg-purple-800">
      <div className="flex items-center justify-between  w-full h-16 px-6 text-white">
        <Link href="/" className="cursor-pointer">
          <div>Logo</div>
        </Link>
        <Link href="/profile" className="cursor-pointer">
          {user.name}
        </Link>
      </div>
      <div className="flex items-center justify-between  w-full h-16 px-6 text-white bg-neutral-500">
        <Link href="/" className="cursor-pointer">
          <div>Logo</div>
        </Link>
        <Link href="/profile" className="cursor-pointer">
          {user.name}
        </Link>
      </div>
      <div className="flex items-center justify-between  w-full h-16 px-6 text-white bg-neutral-500">
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
export default Footer;
