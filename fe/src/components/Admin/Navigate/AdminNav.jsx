import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoginStore } from "../../../zustand-store/loginState";
import { items } from "../../../data/admin-nav";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";

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
    <Sider
      width="16vw"
      style={{
        minWidth: "200px", // Độ rộng tối thiểu
        maxWidth: "250px", // Độ rộng tối đa
        height: "100vh",
        background: "#CFF53E",
        overflow: "auto",
        position: "fixed",
        left: 0,
      }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4">
        <img
          src="/images/logo_nghich_lg.png"
          alt="Logo"
          className="h-12 my-6"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ background: "#CFF53E" }}
      >
        {items[0].children.map((item) => (
          <Menu.Item key={item.id} className="py-8">
            {/* <Menu.Item key={item.id} icon={<HomeOutlined />} className="py-8"> */}

            {item.label}
          </Menu.Item>
        ))}

        {/* Logout */}
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          className="text-lg text-black font-semibold hover:text-white hover:bg-pink-400 cursor-pointer"
          onClick={adminLogout}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default AdminNav;
