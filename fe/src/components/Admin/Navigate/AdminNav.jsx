import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoginStore } from "../../../zustand-store/loginState";
import { items } from "../../../data/admin-nav";

const AdminNav = () => {
  const navigate = useNavigate();
  const { logout } = useLoginStore();

  const adminLogout = () => {
    navigate("/");
    Cookies.remove("auth_token");
    toast.success("Logout successfully");
    logout();
  };

  return (
    <div className="flex flex-col pt-9 pb-4 bg-[#CFF53E] h-full">
      {items[0].children.map((item) => (
        <div>{item.label}</div>
      ))}
      <a
        className="px-2 font-normal py-1 my-1 text-sm text-red-500 hover:text-white hover:border-0 hover:bg-red-500 max-w-fit border-[1px] border-red-500 rounded-lg cursor-pointer"
        onClick={adminLogout}
      >
        Logout
      </a>
    </div>
  );
};
export default AdminNav;
