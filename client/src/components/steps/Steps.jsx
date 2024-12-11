import React from "react";
import { assets, stepsData } from "../../assets/assets";

const Steps = () => {
  return (
    <div className="flex items-center justify-center flex-col my-32">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How its works</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Transform words into stunning images
      </p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-5 bg-white/20
            shadow-md cursor-pointer rounded-md"
          >
            <img src={item.icon} alt="steps_img" />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
