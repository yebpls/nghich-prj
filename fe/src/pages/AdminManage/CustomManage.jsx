import React, { useEffect, useState } from "react";
import {
  deleteCustomBag,
  useAcceptCustomPublicMutation,
  useGetAllCustomBags,
  useGetCustom,
} from "../../api/custom";
import { Button, Image, Space, Table, Tag, notification } from "antd";
import { useAllUser } from "../../api/User/user";
import useColumnFilters from "../../components/Table/utils";
import { useMutation } from "react-query";
import moment from "moment";
import styled from "styled-components";
import ConfirmButton from "../../components/UI/ModalConfirm";
import { DeleteOutlined } from "@ant-design/icons";

const StyledButton = styled(ConfirmButton)`
  border-color: #ffffff !important;
  box-shadow: none !important;
`;

export default function CustomManage() {
  const { refetch } = useGetCustom();

  const { data: initialCustomBags } = useGetAllCustomBags();
  const { mutate: acceptCustomPublic } = useAcceptCustomPublicMutation();
  const { data: users } = useAllUser();
  const { getColumnSearchProps } = useColumnFilters();
  const [customBags, setCustomBags] = useState([]);

  useEffect(() => {
    if (initialCustomBags) {
      setCustomBags(initialCustomBags);
    }
  }, [initialCustomBags]);

  // Mutation for deleting custom bag
  const { mutate: deleteBagMutation } = useMutation(deleteCustomBag, {
    onSuccess: (deletedBagId) => {
      notification.success({
        message: "Success",
        description: "Custom bag deleted successfully.",
      });
      setCustomBags((prevBags) =>
        prevBags.filter((bag) => bag._id !== deletedBagId)
      ); // Remove deleted bag from state
    },
    onError: (error) => {
      console.error("Failed to delete custom bag:", error);
      notification.error({
        message: "Error",
        description: "Failed to delete custom bag. Please try again later.",
      });
    },
  });

  // Function to delete a custom bag
  const handleDeleteBag = (customBagId) => {
    deleteBagMutation(customBagId);
  };

  // Combine customBags with users
  const combinedData = customBags
    ?.map((customBag, index) => {
      const user = users?.find((user) => user._id === customBag.user_id);
      return {
        ...customBag,
        index: customBags.length - index, // Reverse the index order
        user: user ? user : null,
      };
    })
    .sort(
      (a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf()
    ); // Sort by created_at descending

  console.log(combinedData, "combined data");

  const AcceptPublic = (id) => {
    acceptCustomPublic(id);
  };

  const columns = [
    {
      title: "STT",
      width: 100,
      dataIndex: "index",
      key: "index",
      render: (index) => <p className="text-center">{index}</p>, // Display index as-is
    },
    {
      title: "Image",
      dataIndex: "url",
      fixed: "left",
      key: "url",
      width: 200,

      render: (url) => (
        <Image
          width={150}
          src={url}
          className="rounded-lg"
          style={{
            width: "100%",
            height: "auto",
            maskImage: "url('/images/bagsBody/BagTransparentBg.png')",
            WebkitMaskImage: "url('/images/bagsBody/BagTransparentBg.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      ),
    },
    {
      title: "Name",
      width: 200,
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name", "Search"),
      render: (name) => (
        <div>
          {name ? (
            <p className=" font-semibold">{name}</p>
          ) : (
            <p className="text-slate-400">Empty Name</p>
          )}
        </div>
      ),
    },
    {
      title: "Color",
      dataIndex: "color",
      width: 100,
      key: "color",
      render: (color) => (
        <div style={{ color: `#${color}` }}>
          <div className="w-fit mt-3">{color}</div>
          <div className="text-3xl">■</div>
        </div>
      ),
    },
    {
      title: "Create Date",
      width: 260,
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => {
        const formattedDate = moment(created_at).format(
          "MMMM Do YYYY, h:mm:ss a"
        );
        return <p className="w-fit mt-3 ">{formattedDate}</p>;
      },
    },
    {
      title: "Author make",
      width: 100,

      dataIndex: "user",
      key: "user",
      render: (user) => <p className="font-semibold">{user?.username}</p>,
    },
    {
      title: "Public Status",
      width: 160,

      dataIndex: "public_status",
      key: "public_status",
      render: (public_status) => {
        let tagColor, tagText;
        switch (public_status) {
          case 0:
            tagColor = "gray";
            tagText = "Private";
            break;
          case 1:
            tagColor = "lime";
            tagText = "Request Public";
            break;
          case 2:
            tagColor = "pink";
            tagText = "Public";
            break;
          default:
            tagColor = "default";
            tagText = "Unknown Status";
        }
        return (
          <Tag color={tagColor} className=" flex justify-center">
            {tagText}
          </Tag>
        );
      },
      filters: [
        { text: "Private", value: 0 },
        { text: "Request Public", value: 1 },
        { text: "Public", value: 2 },
      ],
      onFilter: (value, record) => record.public_status === value,
    },
    {
      title: "Action",
      width: 230,
      key: "action",
      render: (text, record) => (
        <div className="flex justify-around">
          {record.public_status === 1 && (
            <button
              onClick={() => AcceptPublic(record._id)}
              className="bg-pink-400 hover:bg-pink-600 text-white py-1 px-3 rounded"
            >
              Accept Public
            </button>
          )}

          <StyledButton
            onClick={() => handleDeleteBag(record._id)}
            title={"Are you sure you want to delete the custom?"}
            content={"This action will delete the current custom."}
          >
            <DeleteOutlined className="cursor-pointer text-red-200 hover:text-red-600  text-xl" />
          </StyledButton>
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
      <div className="max-w-[1300px] w-[1400px] overflow-x-auto xxl:max-w-[1250px] xl:max-w-[969px] lg:max-w-[785px]">
        <Table
          columns={columns}
          dataSource={combinedData}
          scroll={{ x: "max-content", y: 600 }}
        />
      </div>
    </div>
  );
}
