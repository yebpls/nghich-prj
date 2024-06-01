import React, { useEffect } from "react";
import { useGetUserProfile } from "../../api/user";
import UserWishlist from "./UserWishlist";
import UserNav from "./UserNav";
import UserNavMobi from "./UserNavMobi";
import Input from "../../components/Input/Input";
import { Controller, set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import { userFieldInput } from "../../data/user-field";
import Cookies from "js-cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEditUser from "../../yup/schemaEditUser";
import { useQueryClient } from "react-query";

export default function UserProfile() {
  const { data: userData, isFetching, error } = useGetUserProfile();
  const queryClient = useQueryClient();
  console.log("userData", userData?.username);
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schemaEditUser),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
  } = form;

  function onSubmit(input) {
    console.log("input user", input);
    console.log("errors", errors);
  }
  useEffect(() => {
    if (userData) {
      setValue("username", userData.username);
      setValue("email", userData.email);
      setValue("name", userData.name);
      setValue(
        "date_of_birth",
        userData.date_of_birth
          ? userData.date_of_birth
          : moment().subtract(16, "years").format("YYYY-MM-DD")
      );
    }
  }, [isFetching]);

  useEffect(() => {
    console.log("error", error);
    if (error) {
      toast.error("Error when get user profile");
      navigate("/login");
      queryClient.removeQueries("user");
    }
  }, [error]);
  return (
    <div>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <p className="text-black font-bold text-lg pb-5">Account Details</p>
            {userFieldInput.map((item) => (
              <div className="mb-2 w-full relative">
                <p className="text-sm font-bold mb-2">{item.label} *</p>
                <input
                  className="w-full py-2 px-4 font-extralight border-slate-300 focus:border-slate-400 rounded-md border-[1px]  placeholder-gray_3  focus:placeholder-transparent  "
                  type="text"
                  placeholder={item.label}
                  {...register(item.field, { required: true })}
                  disabled={item.disable}
                />
                <div className="text-left text-xs  text-red-500 ml-3 mt-1">
                  {errors[item.field]?.message}
                </div>
              </div>
            ))}
            <p className="text-sm font-bold mb-2">Date of birth *</p>
            <Controller
              name="date_of_birth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  value={field.value ? moment(field.value) : null}
                  onChange={(date) =>
                    field.onChange(date ? date.format("YYYY-MM-DD") : null)
                  }
                  className=" py-2 px-4"
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-slate-700 hover:bg-slate-900 text-white text-sm py-3 px-4 rounded-lg my-3"
          >
            Change My Profile
          </button>
        </form>
      )}
    </div>
  );
}
