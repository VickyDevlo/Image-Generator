import React from "react";
import {
  Banner,
  Description,
  GenerateButton,
  Steps,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateButton />
    </div>
  );
};

export default Home;
