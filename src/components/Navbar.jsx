import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png"
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const {user} = use(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={userImg} alt="" />
        <Link to="/auth/login" className=" px-10 btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
