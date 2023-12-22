import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSettings } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    {
      title: "Features",
    },
    {
      title: "Discover",
    },
    {
      title: "Community",
    },
    {
      title: "Stories",
    },
    {
      title: "Blog",
    },
  ];
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>Social</h2>
      </div>
      <div className="nav-items">
        {navItems.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
      <div className="nav-buttons">
        <button className="login">Login</button>
        <button className="details">See Details</button>

        <IoMdSettings color="grey" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
