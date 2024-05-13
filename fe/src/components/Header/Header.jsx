import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex w-full items-center justify-between px-[160px] py-[16px] relative bg-[#ffffff]">
      <img
        className="relative w-[98px] h-[37px] object-cover"
        alt="Logo copy"
        src="/logo_nghich.png"
      />
      <div className="flex gap-20">
        <Link className="text-gray_1 font-medium">Home</Link>
        <Link className="text-gray_1 font-medium">Product</Link>
        <Link className="text-gray_1 font-medium">Custom</Link>
        <Link className="text-gray_1 font-medium">Contact Us</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link className="h-8 w-8">
          <img className="w-full h-full" src="images/Vector.png" />
        </Link>
        {isLogin && (
          <>
            <Link className="h-8 w-8 flex items-center justify-center border-2 border-black rounded-full">
              <FontAwesomeIcon size="lg" icon={faUser} />
            </Link>
            <Link className="h-8 flex items-center">
              <img
                className="inline-block w-8 h-full"
                src="images/shopping bag.png"
              />
              <span className=" border border-black rounded-full bg-black text-white w-6 h-6 flex items-center justify-center">
                5
              </span>
            </Link>
          </>
        )}
        <Link>Login</Link>
      </div>
    </div>
  );
};

export default Header;
