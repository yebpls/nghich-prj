import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useLoginStore } from "../../../zustand-store/loginState";

const AdminNavMobi = () => {
  const navigate = useNavigate();
  const { logout } = useLoginStore();

  const AdminLogout = () => {
    navigate("/");
    Cookies.remove("auth_token");
    toast.success("Logout successfully");
    logout();
  };
  const items = [
    {
      key: "account",
      label: "Account Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "1",
          label: <Link to="/admin/dashboard">Dashboard</Link>,
        },

        {
          key: "2",
          label: <Link to="/admin/order-management">Order Management</Link>,
        },

        {
          key: "3",
          label: (
            <Link to="/admin/customer-management">Customer Management</Link>
          ),
        },
        {
          key: "4",
          label: <Link to="/admin/product-management">Product Management</Link>,
        },
        {
          key: "5",
          label: <Link to="/admin/custom-management">Custom Management</Link>,
        },
        // {
        //   key: "5",
        //   label: <Link to="/admin/settings">Settings</Link>,
        // },
        {
          key: "6",
          label: (
            <a className=" text-sm  cursor-pointer" onClick={AdminLogout}>
              Logout
            </a>
          ),
        },
      ],
    },
  ];

  return (
    <Menu
      //   onClick={onClick}
      visible={true}
      className="w-full lg:w-0 z-50 absolute"
      mode="inline"
      items={items}
    >
      {/* <Dropdown
      menu={{
        items: items[0].children,
      }}
      trigger={["click"]}
      width="100%"
      className="w-full lg:w-0 z-50 absolute"
    >
      <div
        className="text-md flex cursor-pointer hover:bg-slate-100 py-4 px-4"
        // onClick={(e) => e.preventDefault()}
      >
        <div className="w-1/12">{items[0].icon}</div>
        <div className="w-5/6">{items[0].label}</div>
        <div className="w-1/12">
          <DownOutlined />
        </div>
      </div>
    </Dropdown> */}
    </Menu>
  );
};
export default AdminNavMobi;
