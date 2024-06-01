import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
const items = [
  {
    key: "account",
    label: "Account Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "1",
        label: <NavLink to="/user/user-profile">User Profile</NavLink>,
      },
      {
        key: "2",
        label: <NavLink to="/user/user-address">Address</NavLink>,
      },
      {
        key: "3",
        label: <NavLink to="/user/user-order">Orders</NavLink>,
      },
      {
        key: "4",
        label: <NavLink to="/user/user-draft">Drafts</NavLink>,
      },
      {
        key: "5",
        label: <NavLink to="/user/user-wishlist">Wishlist</NavLink>,
      },
      {
        key: "6",
        label: "LogOut",
      },
    ],
  },
];
const UserNavMobi = () => {
  //   const onClick = (e) => {
  //     console.log("click ", e);
  //   };
  return (
    <Menu
      //   onClick={onClick}
      className="w-full lg:w-0 z-50 absolute"
      mode="inline"
      items={items}
    />
  );
};
export default UserNavMobi;
