import React from "react";
import { Route, Routes } from "react-router-dom";
import { BuyCredit, Home, Result } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/buy" element={<BuyCredit />} />
    </Routes>
  );
};
