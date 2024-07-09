import React from "react";
import Navbar from "./Navbar";
import Navigation from "../components/specific/Navigation";
import Refer from "./Refer";
import RefBenefit from "./RefBenefit";
import Faq from "./Faq";
import Support from "./Support";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-screen min-h-[100vh] overflow-x-hidden ">
      <div className="h-16  font-medium gap-4 w-full overflow-x-hidden flex justify-around sm:justify-center items-center bg-[#DDEAFC]">
        <h1 className="text-center text-[0.8rem] sm:text-[1rem]">
          Navigate your ideal career path with tailored expert advice
        </h1>
        <span className="text-[#1A73E8] text-[0.8rem] sm:text-[1rem] ">
          Contact Expert
        </span>
      </div>
      <Navbar />
      <Navigation />
      <Refer />
      <RefBenefit />
      <Faq />
      <Support />
      <Footer />
    </div>
  );
};

export default Home;
