import React from "react";
import whiteLogo from "../assets/whiteLogo.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = ({
  programs = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech",
  ],
}) => {
    const currentYear = new Date().getFullYear();
  return (
    <div className=" text-white relative  mt-24 w-screen h-[17vh] lg:h-[100vh] flex flex-col  items-center bg-[#282828]">
      {/* Logo and button section  */}
      <div className="hidden lg:flex w-[66rem] border-b-[2px] border-white  justify-between items-center py-12">
        <img className="h-[2rem]" src={whiteLogo} alt="" />
        <div className="flex  flex-col justify-center gap-4 items-center">
          <Button variant="contained">Schedule 1-on-1 Call Now</Button>
          <h1>Speak with our Learning Advisor</h1>
        </div>
      </div>
      {/* whole about us and program section  */}
      <div className=" hidden lg:flex w-[66rem] text-[0.8rem] gap-16  justify-around items-start">
        {/* programs */}
        <div className="flex mt-8 flex-col gap-4">
          <h1 className="text-[1rem]">Programs</h1>{" "}
          {programs?.map((program, index) => (
            <div
              className="flex cursor-pointer justify-between items-center gap-8"
              key={index}
            >
              <h1 className="font-bold">{program}</h1>
              <AddIcon></AddIcon>
            </div>
          ))}
        </div>
        {/* contacts  */}
        <div className="flex mt-8 flex-col gap-4">
          <h1 className="text-[1rem]">Contact Us</h1>
          <h1>Email us (For Data Science Queries): admissions@accredian.com</h1>
          <h1>Email us (For Product Management Queries):pm@accredian.com</h1>
          <h1>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</h1>
          <h1>Product Management Admission Helpline:+91 9625811095</h1>
          <h1>Enrolled Student Helpline: +91 7969322507</h1>
          <h1>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, Haryana 122015
          </h1>
          <h1 className="text-[1rem]">Why Accredian</h1>
          <h1 className="text-[1rem]">Follow Us</h1>
          <div className="flex gap-4 ">
            <FacebookIcon sx={{cursor:"pointer"}} />
            <LinkedInIcon  sx={{cursor:"pointer"}} />
            <TwitterIcon  sx={{cursor:"pointer"}} />
            <InstagramIcon  sx={{cursor:"pointer"}} />
            <YouTubeIcon  sx={{cursor:"pointer"}}    />
          </div>
        </div>
        <div className="flex mt-8 flex-col gap-4">
            <h1 className="text-[1rem] cursor-pointer">Accredian</h1>
            <h1 className="cursor-pointer">About</h1>
            <h1 className="cursor-pointer">Career</h1>
            <h1 className="cursor-pointer">Blog</h1>
            <h1 className="cursor-pointer">Admission Policy</h1>
            <h1 className="cursor-pointer">Referral Policy</h1>
            <h1 className="cursor-pointer">Privacy Policy</h1>
            <h1 className="cursor-pointer">Terms Of Service</h1>
            <h1 className="cursor-pointer">Master FAQs</h1>
        </div>
      </div>
      <h1 className=" text-[1rem] lg:text-[0.9rem] px-8 sm:px-0 font-bold lg:font-normal  text-center absolute bottom-12">© {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
