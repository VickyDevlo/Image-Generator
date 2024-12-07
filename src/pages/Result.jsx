import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div>
        <div className="relative">
          <img
            src={image}
            alt="sample_img"
            className=" max-w-xs md:max-w-sm rounded"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            } 
       `}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>loading...</p>
      </div>

      {!isImageLoaded && (
        <div
          className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5
       mt-10 rounded-full"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you wont to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap justify-center gap-2 text-white text-center text-sm p-0.5 mt-10 rounded-full">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent border border-zinc-900 text-black px-8
      py-3 rounded-full cursor-pointer"
          >
            Generate another
          </button>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
