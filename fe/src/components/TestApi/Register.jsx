import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation, useRegisterMutation } from "../../api/auth";
import { registerInput } from "./inputField";

export default function Register() {
  //     "name": "baotest1",
  //     "username": "baotest1",
  //     "email": "baotest1@gmail.com",
  //     "password": "Bao0105*",
  //     "confirm_password": "Bao0105*"
  // }
  const { mutate: registerAccount } = useRegisterMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function onSubmit({
    name,
    username,
    email,
    password,
    confirm_password,
  }) {
    await registerAccount({
      name,
      username,
      email,
      password,
      confirm_password,
    });
  }
  // {
  //     "name": "baotest1",
  //     "username": "baotest1",
  //     "email": "baotest1@gmail.com",
  //     "password": "Bao0105*",
  //     "confirm_password": "Bao0105*"
  // }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center bg-green-200 w-full lg:w-1/2 border-s-lime-500 "
      >
        {registerInput.map((field) => (
          <div className="p-3">
            <label>{field.label}</label> <br />
            <input
              type={field.type}
              {...register(field.register, {
                required: `Yeu cau nhap ${field.label}`,
                pattern: {
                  value: field.pattern,
                  message: `khong phai dinh dang ${field.label}`,
                },
              })}
              className=" p-3 m-3 w-2/3 border-2 rounded-md border-gray-400 h-7 md:h-12 mt-2 tracking-normal font-15px md:font-15px"
              // error={errors.email?.message}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px"
          variant="formButton"
        >
          Dang ky
        </button>
      </form>
    </div>
  );
}
