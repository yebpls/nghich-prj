import { Collapse } from "antd";
import React, { useEffect } from "react";
import { useBanUser, useUnbanUser } from "../../../api/User/user";

export default function CustomerListLine({ user, index, setIsUpdate }) {
  const { mutate: unbanUser, isSuccess: unbanSuccess } = useUnbanUser();
  const { mutate: banUser, isSuccess: banSuccess } = useBanUser();

  const items = [
    {
      key: "1",
      label: <p className="text-sm">List Address</p>,
      children: (
        <div>
          {user.addresses
            ?.sort((a, b) => b.default - a.default)
            .map((item) => (
              <div
                key={item._id}
                className={`text-xs m-1 p-2 rounded-lg border-[1px] border-slate-500  ${
                  item.default
                    ? "text-lime-500 border-lime-500"
                    : " text-pink-500"
                }`}
              >
                <p className="text-lime-500 font-bold">
                  {item.default ? "Default" : " "}
                </p>
                <p>{item.phoneNumber}</p>
                <p>{item.address?.split("...")[0]}</p>
              </div>
            ))}
        </div>
      ),
    },
  ];
  const BanUser = (id) => {
    if (id) {
      banUser(id);
    }
  };
  const UnbanUser = (id) => {
    if (id) {
      unbanUser(id);
    }
  };
  useEffect(() => {
    if (unbanSuccess || banSuccess) {
      setIsUpdate(true);
    }
  }, [unbanSuccess, banSuccess]);
  return (
    <div>
      <div key={user._id}>
        <div
          className={`w-full flex text-xs text-black ${
            index % 2 === 0 ? "bg-white" : "bg-gray-200"
          }`}
        >
          <div className="w-[13%] p-3">{user.name}</div>
          <div className="w-[13%]  p-3">{user.username}</div>
          <div className="w-1/5  p-3">{user.email}</div>
          <div className="w-1/4 p-3">
            <Collapse ghost accordion items={items} />
          </div>
          <div className="w-1/6 p-3">{user.date_of_birth?.split("T")[0]}</div>
          <div className="p-3">
            {user.verify === 2 ? (
              <a
                className="cursor-pointer text-center my-auto py-1 px-2 hover:text-white hover:bg-green-500 rounded-xl text-green-500 bg-white border-green-500 border-[1px] "
                onClick={() => UnbanUser(user._id)}
              >
                Unban
              </a>
            ) : (
              <a
                className="cursor-pointer text-center py-1 px-4 hover:text-white hover:bg-red-500 rounded-xl text-red-500 bg-white border-red-500 border-[1px] "
                onClick={() => BanUser(user._id)}
              >
                Ban
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
