import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="overflow-x-hidden flex w-screen justify-center items-center  h-[6rem]">
    <div className=" rounded-full w-[21rem] sm:w-[33rem] flex justify-around items-center text-[1.1rem] h-12 bg-blue-100">
      <a href="#refer">Refer</a>
      <a href="#benefits">Benefits</a>
      <a href="#faqs">FAQs</a>
      <a href="#support">Support</a>
    </div>
    </div>
  );
};

export default Navigation;
