import React from "react";
import {
  useAcceptCustomPublicMutation,
  useGetAllCustomBags,
} from "../../api/custom";
import { Button, Image, Space, Table } from "antd";
import { useAllUser } from "../../api/User/user";
import useColumnFilters from "../../components/Table/utils";

export default function CustomManage() {
  const { data: customBags } = useGetAllCustomBags();
  const { mutate: acceptCustomPublic } = useAcceptCustomPublicMutation();
  const { data: users } = useAllUser();
  console.log(customBags, "custom bags");
  const { getColumnSearchProps } = useColumnFilters();
  const combinedData = customBags?.map((customBag) => {
    const user = users?.find((user) => user._id === customBag.user_id);
    return {
      ...customBag,
      user: user ? user : null, // Include the user object in each customBag object, or null if not found
    };
  });
  const AcceptPublic = (id) => {
    acceptCustomPublic(id);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "url",
      key: "url",

      render: (url) => <Image width={132} src={url} className="rounded-lg" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name", "Search"),
      render: (name) => (
        <div>{name ? name : <p className="text-slate-400">Empty Name</p>}</div>
      ),
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      render: (color) => (
        <div style={{ color: `#${color}` }}>
          <div className="w-fit mt-3">{color}</div>
          <div className="text-3xl">■</div>
        </div>
      ),
    },
    {
      title: "User make",
      dataIndex: "user",
      key: "user",
      render: (user) => user?.username,
    },
    {
      title: "Public Status",
      dataIndex: "public_status",
      key: "public_status",
      render: (public_status) => {
        switch (public_status) {
          case 0:
            return <p className="text-gray-400">Private</p>;
          case 1:
            return <p className="text-lime-500">Request Public</p>;
          case 2:
            return <p className="text-pink-400">Public</p>;
          default:
            return "Unknown Status";
        }
      },
      filters: [
        { text: "Private", value: 0 },
        { text: "Request Public", value: 1 },
        { text: "Public", value: 2 },
      ],
      onFilter: (value, record) => record.public_status === value,
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <div>
          {record.public_status === 1 && (
            <button
              onClick={() => AcceptPublic(record._id)}
              className="bg-pink-400 hover:bg-pink-600 text-white py-1 px-3 rounded"
            >
              Accept Public
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="m-10 text-black font-semibold">
        <h1 className="text-4xl my-2">Custom Management</h1>
        <p className="text-xl mx-2 font-medium">You have Received(All Time)</p>
      </div>
      {/* <div>
        {combinedData &&
          combinedData.map((customBag, index) => (
            <div
              key={customBag._id}
              className={`w-full flex text-sm text-black ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="w-1/4 p-3">
                <Image
                  width={132}
                  src={customBag?.url}
                  className="rounded-lg"
                />
              </div>
              <div className="w-[15%] p-3 my-auto">{customBag.name}</div>
              <div
                className="w-[15%] p-3 my-auto flex"
                style={{ color: `#${customBag.color}` }}
              >
                <div className="w-fit mt-3">{customBag.color}</div>
                <div className="text-3xl">■</div>
              </div>
              <div className="w-[15%] p-3 my-auto">
                {customBag.user?.username}
              </div>
              <div className="w-1/4 p-3 my-auto">
                {(() => {
                  switch (customBag.public_status) {
                    case 0:
                      return <p className="text-gray-400">Private</p>;
                    case 1:
                      return <p className="text-lime-500">Resquet Publice</p>;

                    case 2:
                      return <p className="text-pink-400">Public</p>;

                    default:
                      return "Unknown Status";
                  }
                })()}
              </div>
            </div>
          ))}

      </div> */}
      <Table columns={columns} dataSource={combinedData} />
    </div>
  );
}
