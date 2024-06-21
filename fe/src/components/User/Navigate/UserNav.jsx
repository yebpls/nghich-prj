import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoginStore } from "../../../zustand-store/loginState";
import { items } from "../../../data/user-nav";

const UserNav = () => {
  const navigate = useNavigate();
  const { logout } = useLoginStore();

  const userLogout = () => {
    navigate("/");
    Cookies.remove("auth_token");
    toast.success("Logout successfully");
    logout();
  };

  return (
    <div className="flex flex-col px-2 pt-1 pb-4 bg-slate-200 rounded-lg">
      <div className="w-1/2 mx-auto pt-8">
        <img className=" rounded-full mx-auto w-1/2" src="/image c.png" />
      </div>
      <div className="text-lg font-bold text-center text-slate-600 py-3">
        User Name
      </div>

      {items[0].children.map((item) => (
        <div>{item.label}</div>
      ))}
      <a
        className="px-2 py-1 my-1 text-sm text-red-500 hover:text-white hover:border-0 hover:bg-red-500 max-w-fit border-[1px] border-red-500 rounded-lg cursor-pointer"
        onClick={userLogout}
      >
        Logout
      </a>
    </div>
  );
};
export default UserNav;
