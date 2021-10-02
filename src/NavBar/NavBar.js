import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix_Logo"
      />
      <img
        className="avatar_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsOSKRjxeoUkChaYH26DQsPdPPzI1qp0D-g&usqp=CAU"
        alt="Login_avatar"
      />
    </div>
  );
};

export default NavBar;
