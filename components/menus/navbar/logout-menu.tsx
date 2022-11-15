"use client";

import { useState } from "react";
import { ILogoutMenuProps } from "../../../interfaces/components/menus/navbar";
import Spinner from "../../primitives/spinner";

// a text that is underlined on hover and if loading is true the underline moves from left to right on a loop
// Path: components/primitives/underlined-loading-text.tsx
const LogoutMenu = ({ user }: ILogoutMenuProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex gap-2">
      <div className="font-bold">{user?.username}</div>
      <div
        onClick={async () => {}}
        className={`relative cursor-pointer underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out
        ${loading ? "text-purple-800" : ""}`}
      >
        logout
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
          {loading ? <Spinner size="small" /> : null}
        </div>
      </div>
    </div>
  );
};
export default LogoutMenu;
