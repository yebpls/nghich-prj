import React, { useEffect } from "react";
import { useGetProducts } from "../../api/product";
import { useGetWishlist } from "../../api/user";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../api/auth";

export default function Test() {
  const { data, isFetching } = useGetWishlist();
  const { mutate: login } = useLoginMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // login data
  // email: baotest1@gmail.com
  // password: Bao0105*
  async function onSubmit({ email, password }) {
    await login({
      email,
      password,
    });

    console.log(email, password, "data");
  }
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <input
            type="email"
            {...register("email", {
              required: "Yeu cau nhap email",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "khong phai dinh dang email",
              },
            })}
            error={errors.email?.message}
          />

          <input
            type="text"
            {...register("password", {
              required: "Yeu cau nhap mat khau",
            })}
            error={errors.password?.message}
          />
          <button
            type="submit"
            className="w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px"
            variant="formButton"
          >
            Dang Nhap
          </button>
        </form>
      </div>
      {data?.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
