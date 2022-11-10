"use client";

import { useState } from "react";
import config from "../../utils/config";

const registerUser = async () => {
  const user = await fetch(config.api_path + "/user/register", {
    cache: "no-store",
    credentials: "include",
  });
  const res = user.json();
  return res;
};

const loginUser = async () => {
  const headers: any = {};

  const user = await fetch(config.api_path + "/user/login", {
    cache: "no-store",
    credentials: "include",
    headers,
  });

  const res = user.json();
  return res;
};

const Counter = (props: { user: any }) => {
  const { user } = props;
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  registerUser();
  loginUser();
  return (
    <nav className="p-6 flex justify-between">
      <div className="flex items-center">
        <div className="text-xl font-bold text-gray-800 mr-6">{user.name}</div>
        <div className="text-xl font-bold text-gray-800 mr-6">{count}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </nav>
  );
};

export default Counter;
