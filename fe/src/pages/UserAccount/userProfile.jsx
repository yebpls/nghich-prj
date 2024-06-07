import React, { useEffect } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { userFieldInput } from "../../data/user-field";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEditUser from "../../yup/schemaEditUser";
import { useQueryClient } from "react-query";
import dayjs from "dayjs";
import { useGetUserProfile, useUpdateUser } from "../../api/User/user";

export default function UserProfile() {
  const { data: userData, isFetching, error, refetch } = useGetUserProfile();
  const {mutate: updateUser, isSuccess} = useUpdateUser();
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
    const dateOfBirth = dayjs(input.date_of_birth).format("YYYY-MM-DD");
    const updatedInput = { name: input.name, date_of_birth: dateOfBirth };

    console.log("input user", updatedInput);
    console.log("errors", errors);
    updateUser(updatedInput);
    if(isSuccess){
      refetch();
    }
  }
  useEffect(() => {
    if (userData) {
      setValue("username", userData.username);
      setValue("email", userData.email);
      setValue("name", userData.name);
      setValue(
        "date_of_birth",
        userData.date_of_birth
          ? dayjs(userData.date_of_birth)
          : dayjs().subtract(16, "year")
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
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value ? dayjs(value) : null}
                  onChange={(date) => {
                    onChange(date ? dayjs(date).format("YYYY-MM-DD") : null);
                  }}
                  className="py-2 px-4"
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
