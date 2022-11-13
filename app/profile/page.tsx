import { use } from "react";

import Counter from "./Counter";

const getUser = async (id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
    credentials: "include",
  });
  return user.json();
};

export default function Profile() {
  const u = use(getUser(1));
  return (
    <>
      <div className="header-mask"></div>
      <div className="w-30 w-full">
        <Counter user={u} />
        <div
          key={u.id}
          className="m-2 bg-gray-500 rounded-lg w-80 flex flex-col items-center p-1 gap-1"
        >
          <h2 className="text-lg font-bold bg-white w-full text-center rounded-t-lg">
            {u.name}
          </h2>
          <div className="px-2 py-2 bg-white w-full flex flex-col items-center rounded-b-lg">
            <div className="text-lg font-base">Details:</div>
            <div className="w-full flex flex-col p-2 gap-2">
              <div className="flex">
                <div className="text-base font-light">username:</div>
                <div className="text-base font-base ml-2">{u.username}</div>
              </div>

              <div className="flex">
                <div className="text-base font-light">email:</div>
                <div className="text-base font-base ml-2">{u.email}</div>
              </div>

              <div className="flex">
                <div className="text-base font-light">city:</div>
                <div className="text-base font-base ml-2">
                  {u.address?.city}
                </div>
              </div>

              <div className="flex">
                <div className="text-base font-light">phone:</div>
                <div className="text-base font-base ml-2">{u.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
