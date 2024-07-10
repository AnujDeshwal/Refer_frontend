import React from "react";
import Anni from "../assets/Anni.png";
import box from "../assets/box.png";
import process from "../assets/process.png";
import process1 from "../assets/process1.png";
import process2 from "../assets/process2.png";
import process3 from "../assets/process3.png";
import { Button } from "@mui/material";
import ProcessElem from "../components/specific/ProcessElem";
import ReferButton from "../components/shared/ReferButton";
const Refer = () => {
  return (
    <>
      <div id="refer" className=" overflow-x-hidden w-screen flex justify-center">
        <div className=" relative w-[32rem] sm:w-[44rem] lg:w-[70rem] h-[45rem] sm:h-[60rem] lg:h-[32rem] flex flex-wrap-reverse justify-center items-center rounded-2xl shadow-2xl bg-[#eef5ff]">
          <div className="flex justify-center px-8 sm:px-0 items-center lg:block">
            <img
              style={{ objectFit: "cover" }}
              className="h-[8rem] sm:h-[13rem] lg:h-[17rem] mb-20"
              src={box}
              alt="box"
            />{" "}
           <ReferButton/>
          </div>

          <img
            style={{ objectFit: "cover" }}
            className=" h-[22rem] sm:h-[35rem] lg:h-[35rem] "
            src={Anni}
            alt="anniversary"
          />
        </div>
      </div>
      <div className="w-screen h-[130vh]  sm:h-[100vh]  mt-16 bg-[#eef5ff] flex flex-col justify-between  items-center  py-12">
        <h1 className="font-medium text-[1.3rem]">
          How Do I <span className="text-blue-500 ">Refer?</span>
        </h1>
        <div
          style={{
            backgroundImage: `url(${process})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          // here bg-rotate classes are custome classes
          className="bg-rotate-90 sm:bg-rotate-0 flex justify-around  items-center px-16 md:px-0  md:gap-[3rem] lg:px-8   h-[15rem] w-[45rem] md:h-[20rem] md:w-[60rem lg:h-[25rem] lg:w-[60rem]"
        >

        <ProcessElem url={process1} text="Submit referrals easily via our website’s referral section."/>
        <ProcessElem url={process2} text="Earn rewards once your referral joins an Accredian program."/>
        <ProcessElem url={process3} text="Both parties receive a bonus 30 days after program enrollment."/>

        </div>
        <ReferButton/>
      </div>
    </>
  );
};

export default Refer;
