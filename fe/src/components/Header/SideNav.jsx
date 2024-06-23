import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const sideNavRef = useRef();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavRef]);
  return (
    <div>
      <button onClick={toggleNav} className="menu-button">
        ///
      </button>
      <div
        ref={sideNavRef}
        className={`side-nav ${isNavVisible ? "visible" : ""}`}
      >
        <ul>
          <li onClick={closeNav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              to="/collection"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              to="/customize"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Customize
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
