import Link from "next/link";
import { use } from "react";
import RegisterButton from "./register-button";
import LoginButton from "./login-button";
import { getMe } from "../../api/user";
import LogoutMenu from "../menus/navbar/logout-menu";

const Header = () => {
  const user = use(getMe());
  return (
    <nav className="w-full main-layout-header backdrop-blur-md bg-purple-800 fixed top-0">
      <div className="main-layout-header-content flex justify-between items-center px-6 text-white">
        <Link href="/" className="cursor-pointer">
          <div>Logo</div>
        </Link>
        {user?.id ? (
          <LogoutMenu user={user} />
        ) : (
          <div className="flex gap-2">
            <RegisterButton />
            <LoginButton />
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
