import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="footer_img" width={100} />
      <p className="flex-1 border-l-2 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        All right reserved.Copyright &copy;Pranav.Dev
      </p>
      <div className="flex items-center gap-4">
        <img
          src={assets.facebook_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
        <img
          src={assets.instagram_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
        <img
          src={assets.twitter_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
