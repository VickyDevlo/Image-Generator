import React from "react";
import { assets } from "../../assets/assets";
import { CustomButton } from "../../shared";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Banner = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const imageGenerateHandler = () => {
    user ? navigate("/result") : navigate("/buy");
  };

  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div
        className="text-stone-500 inline-flex gap-2 text-center
       bg-white px-6 py-1 rounded-full border border-neutral-500"
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star_img" />
      </div>
      <h1 className="text-4xl msx-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-medium">
        Turn the text to <span className="text-blue-600">image</span>, in
        seconds
      </h1>

      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </p>

      <CustomButton
        image={assets.star_group}
        btnText={"Generate Images"}
        onClick={imageGenerateHandler}
      />

      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <img
              key={i}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={i % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="sample_img"
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated images from imagify</p>
    </div>
  );
};

export default Banner;
