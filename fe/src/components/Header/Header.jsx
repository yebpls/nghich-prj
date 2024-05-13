import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex w-full items-center justify-between px-[160px] py-[16px] relative bg-[#ffffff]">
      <Link to="/">
        <img
          className="relative w-[98px] h-[37px] object-cover"
          alt="Logo copy"
          src="/logo_nghich.png"
        />
      </Link>

      <div className="flex gap-20">
        <Link to="/" className="text-gray_2 font-medium">
          Home
        </Link>
        <Link className="text-gray_2 font-medium">Product</Link>
        <Link className="text-gray_2 font-medium">Custom</Link>
        <Link className="text-gray_2 font-medium">Contact Us</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link className="h-5 w-5">
          <img
            alt="search"
            className="w-full h-full"
            src="images/search_icon.png"
          />
        </Link>
        {isLogin ? (
          <>
            <Link className="h-6 w-6 flex items-center justify-center border border-black rounded-full">
              <FontAwesomeIcon size="1x" className="text-black" icon={faUser} />
            </Link>
            <Link className="h-6 flex items-center">
              <img
                alt="cart"
                className="inline-block w-6 h-full mr-1"
                src="images/cart_icon.png"
              />
              <span className="text-xs border border-black rounded-full bg-black text-white w-5 h-5 flex items-center justify-center">
                5
              </span>
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
