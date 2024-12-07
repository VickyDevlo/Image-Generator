import React from "react";
import { CustomButton } from "../../shared";

const GenerateButton = () => {
  return (
    <div className="flex items-center justify-center flex-col pb-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-neutral-800 font-semibold mb-4">
        See the magic. Try now
      </h1>
      <CustomButton />
    </div>
  );
};

export default GenerateButton;
