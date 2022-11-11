import { use } from 'react';
import { loginUser } from '../api/user';

const getUsers = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  // delay by 1 minute
  // await new Promise((resolve) => setTimeout(resolve, 60000));

  return users.json();
};

const Home = () => {
  const users = use(getUsers());
  use(
    loginUser({
      bodyOrQuery: {
        username: 'test',
        whatever: ['salut', 'palut'],
      },
      options: {
        cache: 'no-store',
      },
    })
  );
  return (
    <div className="basic-page-style">
      <div className="w-full h-16" />
      <div className="flex flex-wrap h-full w-full justify-around">
        {users.map((u: any) => {
          return (
            <div
              key={u.id}
              className="m-2 bg-purple-900 rounded-lg w-80 flex flex-col h-min items-center p-1 gap-1"
            >
              <h2 className="text-lg font-bold bg-green-500 text-white w-full text-center rounded-t-lg">
                {u.name}
              </h2>
              <div className="px-2 py-2 bg-orange-400 text-white w-full flex flex-col items-center rounded-b-lg">
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
          );
        })}
        {new Array(10).fill(0).map((_, i) => {
          return <div key={i} className={'mx-2 px-1 w-80 h-0'}></div>;
        })}
      </div>
    </div>
  );
};
export default Home;
