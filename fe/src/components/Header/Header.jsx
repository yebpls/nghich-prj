import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { mdiTicket } from "@mdi/js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useLoginStore } from "../../zustand-store/loginState";
import { useCartStore } from "../../zustand-store/cartState";
import { getToken } from "../../config/http";

const Header = () => {
  const { countCart } = useCartStore((state) => state);
  const { isLogin, login, logout } = useLoginStore();


  console.log("isLogin", isLogin);
  const isToken = getToken();
  useEffect(() => {
    if (isToken) {
      login()
      ;
    } else {
      logout();
    }
  }, [isToken]);
  return (
    <header className="header ">
      <div className="header-promotion text-white relative bg-[#FF78C5] p-2">
        <div className="container flex justify-center mx-[auto] my-0">
          <svg
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d={mdiTicket} />
          </svg>
          30% off storewide — Limited time!
          <Link to="/shop" className="underline">
            Shop Now!!! <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        </div>
      </div>
      <nav className="header-navigation p-4 pb-0 ">
        <div className="container mx-[auto] my-0 flex flex-wrap">
          <div className="header-navigation-left text-left w-[33%]">
            <Link to="/">
              <img
                className="relative w-24 h-9 object-cover"
                alt="Logo"
                src="/logo_nghich.png"
              />
            </Link>
          </div>
          <div className="header-navigation-center text-center w-[33%]">
            <ul className="navigation text-gray_2 font-medium flex justify-center space-x-12">
              <li className="navigation-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-pink-400 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink
                  to="/collection"
                  className={({ isActive }) =>
                    isActive ? "text-pink-400 font-bold" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink
                  to="/customize"
                  className={({ isActive }) =>
                    isActive ? "text-pink-400 font-bold" : ""
                  }
                >
                  Customize
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-pink-400 font-bold" : ""
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-navigation-right w-[33%]">
            <ul className="menu flex justify-end space-x-5">
              <li className="menu-item">
                <Link className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-black hover:text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/cart" className="h-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-black hover:text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <span className="text-xs mb-5 border border-black rounded-full bg-black text-white w-5 h-5 flex items-center justify-center">
                    {countCart}
                  </span>
                </Link>
              </li>
              {isLogin ? (
                <li className="menu-item">
                  <Link
                    to="/user"
                    className="h-6 w-6 flex items-center justify-center border border-black rounded-full"
                  >
                    <FontAwesomeIcon
                      size="1x"
                      className="text-black"
                      icon={faUser}
                    />
                  </Link>
                </li>
              ) : (
                <li className="menu-item">
                  <Link to="/login" className="text-gray_2 font-medium">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
