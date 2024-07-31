import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavMobi from "../components/Admin/Navigate/AdminNavMobi";
import AdminNav from "../components/Admin/Navigate/AdminNav";

export default function AdminLayout() {
  return (
    <>
      <div className="flex w-full mx-auto">
        <div className="w-0 lg:w-1/4 invisible lg:visible">
          <AdminNav />
        </div>
        <div className="visible lg:invisible lg:w-0">
          <AdminNavMobi />
        </div>
        <div className=" w-full min-h-screen   pt-16 lg:pt-0 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
