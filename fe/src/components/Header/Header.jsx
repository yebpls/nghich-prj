import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { mdiTicket } from "@mdi/js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useLoginStore } from "../../zustand-store/loginState";

const Header = () => {
  const { isLogin } = useLoginStore((state) => state);
  console.log("isLogin", isLogin);
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
                  to="/products"
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
                <Link className="h-5 w-5">
                  <img
                    alt="search"
                    className="w-full h-full"
                    src="images/search_icon.png"
                  />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/cart" className="h-6 flex items-center">
                  <img
                    alt="cart"
                    className="inline-block w-6 h-full "
                    src="images/cart_icon.png"
                  />
                  <span className="text-xs mb-5 border border-black rounded-full bg-black text-white w-5 h-5 flex items-center justify-center">
                    5
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
