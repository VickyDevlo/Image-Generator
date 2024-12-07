import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <img
        src={assets.logo}
        alt="logo_img"
        className="w-28 sm:w-32 lg:w-40 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="flex items-center gap-2 bg-teal-200 px-2 sm:px-6 py-1.5 sm:py-3 rounded-full font-medium"
            onClick={() => navigate("/buy")}
          >
            <img src={assets.credit_star} alt="credit_img" className="w-5" />
            <p className="text-xs sm:text-sm font-medium text-gray-600 cursor-pointer">
              Credit left : 50
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden pl-4">Hi, Pranav Magare</p>
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-10 drop-shadow"
            />
            <div
              className="absolute hidden group-hover:block top-0 right-0 z-10 
            text-black rounded pt-12 cursor-pointer"
            >
              <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-5">
          <p onClick={() => navigate("/buy")} className="cursor-pointer">
            Pricing
          </p>
          <button className="bg-zinc-800 text-white px-5 py-2 sm:px-10 text-sm rounded-full font-medium">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
