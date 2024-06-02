import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../pages/UserAccount/UserNav";
import UserNavMobi from "../pages/UserAccount/UserNavMobi";
import { useGetUserProfile } from "../api/user";
import UserWishlist from "../pages/UserAccount/UserWishlist";
import { Footer, Header } from "antd/es/layout/layout";

export default function UserLayout() {
  const { data: user, isLoading, error } = useGetUserProfile();

  return (
    <>
      <div className="lg:w-full w-0 invisible lg:visible lg:text-3xl py-0   lg:py-4 text-center">
        My Account
      </div>
      <div className="flex w-full lg:w-3/4 lg:pt-5 mx-auto">
        <div className="w-0 lg:w-1/4 invisible lg:visible">
          <UserNav />
        </div>
        <div className="visible lg:invisible lg:w-0">
          <UserNavMobi />
        </div>
        <div className=" w-full lg:w-3/4 lg:mx-5 px-5 pt-16 lg:pt-0 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
