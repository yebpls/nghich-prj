import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavMobi from "../components/Admin/Navigate/AdminNavMobi";
import AdminNav from "../components/Admin/Navigate/AdminNav";

export default function AdminLayout() {
  return (
    <>
      <div className="flex w-full lg:pt-5 mx-auto">
        <div className="w-0 lg:w-1/4 invisible lg:visible">
          <AdminNav />
        </div>
        <div className="visible lg:invisible lg:w-0">
          <AdminNavMobi />
        </div>
        <div className=" w-full min-h-screen lg:w-3/4 lg:mx-5 px-5 pt-16 lg:pt-0 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
