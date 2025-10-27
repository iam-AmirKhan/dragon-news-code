import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png"
import { AuthContext } from "../provider/AuthProvider";
import button from "daisyui/components/button";
const Navbar = () => {
  const {user, logOut} = use(AuthContext);
const handleLogOut = () => {
  console.log("user trying to logout");
logOut().then(() => {
  alert("your logged out successfully")
})
.catch((error) =>{
  console.log(error)
})
};

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
{
  user ?  (
    <button onClick={handleLogOut} className="px-10 btn btn-primary">Logout</button>
  ) : (<Link to="/auth/login" className=" px-10 btn btn-primary">Login</Link>

)}

        
      </div>
    </div>
  );
};

export default Navbar;
