import { SettingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const style = (isActive) =>
  isActive
    ? "p-2 text-pink-400 font-bold text-sm hover:text-pink-300"
    : "p-2 text-sm hover:text-pink-400 hover:font-bold";
export const items = [
  {
    key: "account",
    label: "Account Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "1",
        label: (
          <NavLink
            className="text-slate-700 text-sm p-2 border-slate-950 w-full border-b-[1px] py-1 font-bold"
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
            className={({ isActive }) => style(isActive)}
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
            className={({ isActive }) => style(isActive)}
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
            className={({ isActive }) => style(isActive)}
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
            className={({ isActive }) => style(isActive)}
            to="/user/user-wishlist"
          >
            Wishlist
          </NavLink>
        ),
      },
    ],
  },
];
