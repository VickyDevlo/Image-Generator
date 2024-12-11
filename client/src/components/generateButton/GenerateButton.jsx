import React, { useContext } from "react";
import { CustomButton } from "../../shared";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const GenerateButton = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const imageGenerateHandler = () => {
    user ? navigate("/result") : navigate("/buy");
  };
  return (
    <div className="flex items-center justify-center flex-col pb-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-neutral-800 font-semibold mb-4">
        See the magic. Try now
      </h1>
      <CustomButton onClick={imageGenerateHandler} />
    </div>
  );
};

export default GenerateButton;
