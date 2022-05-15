import React from "react";
import "./Navigation.css";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="div">
        <Link className="logo" to="/Home">
          الشعار
        </Link>
        <Link className="home" to="/Home">
          الرئيسية
        </Link>
        <a href="/Home/#who" className="whoAreWe">
          {" "}
          {/* <Link  to="/Home/who"> */}
            من نحن
          {/* </Link>{" "} */}
        </a>
        <Link className="ConnectWithUs" to="/">
          تواصل معنا
        </Link>
        <Link className="action" to="/">
          الية العمل
        </Link>{" "}
        <a href="/Home/#features" className="features">

       
          ميزاتنا
        </a>
        <Link className="partner" to="/">
          كن شريك
        </Link>
        <span className="dot1"></span>

        <Link className="line" to="/Home">
          <MdOutlineMenu />
        </Link>{" "}
        <Link className="user" to="/Home">
          <FaUserAlt />
        </Link>
      </div>
    </>
  );
};

export default Navigation;
