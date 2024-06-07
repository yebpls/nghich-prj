import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoginStore } from "../../zustand-store/loginState";


const UserNav = () => {
  const navigate = useNavigate();
  const {  logout } = useLoginStore();

  
  const logOut = () => {
    navigate('/')
    Cookies.remove('auth_token')
    toast.success("Logout successfully");
    logout()
  };
  const items = [
    {
      key: "account",
      label: "Account Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "1",
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700 border-slate-950 w-full border-b-[1px] py-1 font-bold"
                  : ""
              }
              to="/user/user-profile"
            >
              User Profile
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700 border-slate-950 w-full border-b-[1px] py-1 font-bold"
                  : ""
              }
              to="/user/user-address"
            >
              Address
            </NavLink>
          ),
        },
        {
          key: "3",
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700 border-slate-950 w-full border-b-[1px] py-1 font-bold"
                  : ""
              }
              to="/user/user-order"
            >
              Orders
            </NavLink>
          ),
        },
        {
          key: "4",
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700 border-slate-950 w-full border-b-[1px] py-1 font-bold"
                  : ""
              }
              to="/user/user-draft"
            >
              Drafts
            </NavLink>
          ),
        },
        {
          key: "5",
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700 border-slate-950 w-full border-b-[1px] py-1 font-bold"
                  : ""
              }
              to="/user/user-wishlist"
            >
              Wishlist
            </NavLink>
          ),
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col px-2 pt-1 pb-4 bg-slate-200 rounded-lg">
      <div className="w-1/2 mx-auto pt-8">
        <img className=" rounded-full mx-auto w-1/2" src="/image c.png" />
      </div>
      <div className="text-lg font-bold text-center text-slate-600 py-3">
        User Name
      </div>

      {items[0].children.map((item) => (
        <div className="p-2 text-sm hover:text-slate-800 ">{item.label}</div>
      ))}
      <a className="p-2 text-sm hover:text-slate-800 cursor-pointer"
      onClick={logOut}>Logout</a>
    </div>
  );
};
export default UserNav;
