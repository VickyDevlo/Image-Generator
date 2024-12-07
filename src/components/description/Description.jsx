import React from "react";
import { assets } from "../../assets/assets";

const Description = () => {
  return (
    <div className="flex items-center justify-center flex-col my-24 p-6 md:px-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Turn your imagination into visuals
      </p>
      <div className="flex flex-col items-center gap-5 md:gap-14 md:flex-row">
        <img
          src={assets.sample_img_1}
          alt="side_img"
          className="w-80 xl:w-96 rounded-lg"
        />
        <div className="">
          <h2 className="text-lg md:text-3xl font-medium max-w-lg mb-4 text-center">
            Introducing the AI-Powered text to image generator
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and protraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
