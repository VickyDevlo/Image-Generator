import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-[80vh] text-center pt-10 mb-10">
      <button className="font-medium border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>

      <h1 className="text-center text-xl md:text-3xl font-medium mb-6 sm:mb-8">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="w-[290px] bg-white drop-shadow-md border 
            rounded-lg py-10 sm:py-12 px-8 text-gray-600 hover:scale-105 transition-all cursor-pointer"
          >
            <img src={assets.logo_icon} alt="logo_img" width={40} />
            <p className="mt-3 mb-1 font-semibold">{plan.id}</p>
            <p className="text-base">{plan.desc}</p>
            <p className="mt-6">
              <span className="font-bold text-3xl">${plan.price}</span> / &nbsp;
              {plan.credits} credits
            </p>

            <button className="w-full bg-gray-800 text-white py-2.5 mt-8 text-sm rounded-md">
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
