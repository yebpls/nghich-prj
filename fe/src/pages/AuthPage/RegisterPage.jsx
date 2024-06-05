import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import schemaRegister from "../../yup/schemeRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-toastify";
import { useRegisterMutation } from "../../api/auth";

const RegisterPage = () => {
  const [isAgree, setIsAgree] = useState(false);
  const navigate = useNavigate();

  const { mutate: registerAccount } = useRegisterMutation();

  const form = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    // control,
    reset,
  } = form;
  const onSubmit = (data) => {
    console.log("log submit", data, errors);
    registerAccount({
      name: data.fullname,
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword,
    });
  };
  return (
    <div className="w-full h-screen px-56 py-7">
      <div className="ml-44 mb-10">
        <Link to="/">
          <img className="h-14" src="/logo_nghich_lg.png" alt="" />
        </Link>
      </div>

      <div className="flex justify-between">
        <div className="w-1/2 h-full ">
          <img
            src="/images/login_img.png
    "
            alt=""
          />
        </div>
        <div className="w-1/2 h-full">
          <h2 className="text-4xl text-black font-semibold mb-5">Sign Up</h2>
          <p className="mb-5">
            Already have an account?{" "}
            <Link to="/login" className="text-pink_1 font-bold">
              Log In
            </Link>{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2  placeholder-gray_3  focus:placeholder-transparent  "
                type="text"
                placeholder="Your name"
                {...register("fullname", { required: true })}
              />
              <div className="text-left text-xs  text-red-500 ml-3">
                {errors.fullname?.message}
              </div>
            </div>
            <div className="mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2  placeholder-gray_3  focus:placeholder-transparent  "
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              <div className="text-left text-xs  text-red-500 ml-3">
                {errors.username?.message}
              </div>
            </div>
            <div className="mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2  placeholder-gray_3  focus:placeholder-transparent  "
                type="text"
                placeholder="Email address"
                {...register("email", { required: true })}
              />
              <div className="text-left text-xs  text-red-500 ml-3">
                {errors.email?.message}
              </div>
            </div>
            <div className=" mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2 placeholder-gray_3  focus:placeholder-transparent  "
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <div className="text-left text-xs  text-red-500 ml-3">
                {errors.password?.message}
              </div>
            </div>
            <div className=" mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2 placeholder-gray_3  focus:placeholder-transparent  "
                type="password"
                placeholder="Password"
                {...register("confirmPassword", { required: true })}
              />
              <div className="text-left text-xs  text-red-500 ml-3">
                {errors.confirmPassword?.message}
              </div>
            </div>
            <div className="mb-5 flex items-center">
              <input
                className="w-5 h-5 mr-2"
                id="term"
                type="checkbox"
                onClick={() => setIsAgree(!isAgree)}
              />{" "}
              <label htmlFor="term">
                I agree with <b className="text-black">Privacy Policy</b> and{" "}
                <b className="text-black">Terms of Use</b>
              </label>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-black font-semibold ${
                isAgree ? "bg-green_1" : "bg-gray_1 text-gray_2 "
              }`}
              disabled={!isAgree}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
