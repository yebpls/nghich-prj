import { SettingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const style = (isActive) =>
  isActive
    ? "p-4 py-3 my-4 text-white bg-pink-400 w-full text-base font-bold "
    : "p-4 py-3 my-4 w-full text-base text-black font-semibold hover:text-white hover:bg-pink-400 cursor-pointer";
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
            className={({ isActive }) => style(isActive)}
            to="/admin/dashboard"
          >
            Dashboard
          </NavLink>
        ),
      },

      {
        key: "2",
        label: (
          <NavLink
            className={({ isActive }) => style(isActive)}
            to="/admin/order-management"
          >
            Order Management
          </NavLink>
        ),
      },
      {
        key: "3",
        label: (
          <NavLink
            className={({ isActive }) => style(isActive)}
            to="/admin/product-management"
          >
            Product Management
          </NavLink>
        ),
      },
      {
        key: "4",
        label: (
          <NavLink
            className={({ isActive }) => style(isActive)}
            to="/admin/custom-management"
          >
            Custom Management
          </NavLink>
        ),
      },

      {
        key: "5",
        label: (
          <NavLink
            className={({ isActive }) => style(isActive)}
            to="/admin/customer-management"
          >
            Customer Management
          </NavLink>
        ),
      },
    ],
  },
];
