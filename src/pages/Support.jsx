import React from "react";
import circle from "../assets/circle.png";
import temp from "../assets/temp.png";
import { Button } from "@mui/material";
const Support = () => {
  return (
    <div id="support" className=" mt-12 sm:mt-0 flex w-screen h-[60vh] md:h-[30vh] justify-center items-center">
      {" "}
      <div className="relative w-[23rem] sm:w-[40rem] md:w-[50rem] lg:w-[65rem] h-[11rem]  flex flex-col md:flex-row justify-around items-center rounded-2xl bg-[#1A73E8]">
        <img className=" h-[2.9rem] sm:h-[3.6rem]" src={temp} alt="" />
        <Button
          sx={{
            backgroundColor: "white",
            fontWeight: 700,
            zIndex:2,
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
          variant="outlined"
        >
          Get In Touch{" "}
        </Button>
        <img className="absolute bottom-0" src={circle}  />
      </div>
    </div>
  );
};

export default Support;
