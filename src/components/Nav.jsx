import React from "react";
import imges from "/src/assets/FS-Logo.png";
import { Link } from "react-router";

const Nav = () => {
  return (
    <ul className="nav-upper flex-space-around hover:text-amber-50">
      <li className="nav__list text-xl font-semibold hover:text-orange-500">
        <Link to="/home">Home</Link>
      </li>
      <li className="nav__list text-xl font-semibold hover:text-orange-500">
        <Link to="/products">Product</Link>
      </li>
      <li className="nav__list text-xl font-semibold hover:text-orange-500">
        <Link to="/about">About</Link>
      </li>
      <li className="nav__list ">
        <Link to="/cart">
          <i className="bi bi-cart3 text-4xl hover:text-fuchsia-500"></i>
        </Link>
      </li>
      <li className="nav__list">
        <img className="profile-icon ring-amber-300" src={imges} alt="profile icon" />
      </li>
    </ul>
  );
};

export default Nav;
