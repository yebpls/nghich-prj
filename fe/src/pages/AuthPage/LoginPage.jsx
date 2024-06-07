import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/auth";

const LoginPage = () => {
  const { mutate: login } = useLoginMutation();

  const form = useForm();

  const {
    register,
    formState: { errors },
    handleSubmit,
    // control,
    // reset,
  } = form;
  const onSubmit = (data) => {
    console.log(data);
    login(data);
    // reset();
  };
  return (
    <div className="w-full h-screen px-3 lg:px-56 py-7">
      <div className="ml-44 mb-10">
        <Link to="/">
          <img className="h-14" src="/logo_nghich_lg.png" alt="" />
        </Link>
      </div>
      <div className="lg:flex lg:justify-between">
        <div className=" w-0 lg:w-1/2 h-0 lg:h-full ">
          <img
            src="/images/login_img.png
        "
            alt=""
            // className="h-0 lg:h-full w-0 lg:w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl text-black font-semibold mb-5">Log In</h2>
            <p className="mb-5">
              Dont have an account yet?{" "}
              <Link to="/sign-up" className="text-pink_1 font-bold">
                Sign Up
              </Link>{" "}
            </p>
            <div className="mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2  placeholder-gray_3  focus:placeholder-transparent  "
                type="text"
                placeholder="Your username or email address"
                {...register("email", { required: true })}
              />
            </div>
            <div className=" mb-5 w-full relative">
              <input
                className="w-full h-[50px] py-1 px-4  border-gray_1 border-b-2 placeholder-gray_3  focus:placeholder-transparent  "
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <Link className="text-black font-bold mb-5">Forgot Password?</Link>
            <button
              type="submit"
              className="bg-green_1 w-full py-3 rounded-md text-black font-semibold"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
