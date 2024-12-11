import React from "react";
import { assets } from "../../assets/assets";

export const CustomButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5
        flex items-center gap-2 rounded-full"
    >
      Generate Images
      <img src={assets.star_group} alt="star_group_img" className="h-6" />
    </button>
  );
};
