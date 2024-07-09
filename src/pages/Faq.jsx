import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Faq = () => {
  return (
    <div id="faqs" className=" w-screen mt-[7rem]  sm:mt-0 h-[70vh] gap-8 flex flex-col justify-center items-center 
    px-[4rem] sm:px-[10rem] lg:px-[17rem]">
      <h1 className="text-center font-medium text-[1.3rem]">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </h1>
      <div className="flex flex-col  lg:flex-row justify-around items-center gap-8 text-[0.9rem]">
        <div className=" flex flex-col justify-center gap-4 items-center">
          <Button variant="outlined" fullWidth>
            Eligibility
          </Button>
          <Button variant="outlined" fullWidth>
            How To Use?
          </Button>
          <Button variant="outlined" fullWidth>
            Terms & Conditions
          </Button>
        </div>
        <div className="flex flex-col justify-around gap-8 ">
          <div className="flex  items-center cursor-pointer ">
            <h1 className="text-left text-[#1A73E8]">
              Do i need to have prior Product Management and Project Management
              experience to enroll in the program?
            </h1>
            <KeyboardArrowUpIcon />
          </div>
          <h1 className="text-left">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.</h1>
          <div className="flex  items-center cursor-pointer">
            <h1 className="text-left font-bold">
              Do i need to have prior Product Management and Project Management
              experience to enroll in the program?
            </h1>
            <KeyboardDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
