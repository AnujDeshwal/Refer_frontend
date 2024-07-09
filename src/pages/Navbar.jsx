import React, { useState } from "react";
import logo from "../assets/logo.png.png";
import NavElem from "../components/shared/NavElems";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "../components/specific/NavDrawer";
const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <>
      <div className=" overflow-x-hidden w-screen h-16  flex justify-between px-4 lg:px-0  lg:justify-around items-center ">
        {/* first part  */}
        <div className=" flex justify-center items-center gap-4">
          {" "}
          <div
            className="h-[1.6rem] w-[5.5rem]"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Button
            variant="contained"
            sx={{ textTransform: "none", backgroundColor: "#1A73E8" }}
          >
            Courses{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </Button>
        </div>
        {/* Second part  */}
        <div className="flex gap-[1.5rem] font-medium justify-center items-center">
          <div className=" justify-center items-center gap-[1.5rem] hidden lg:flex">
            {" "}
            <NavElem />
          </div>
          <div className=" hidden sm:block">
            {" "}
            <Button
              sx={{
                backgroundColor: "#eaedf1",
                "&:hover": {
                  backgroundColor: "gray",
                  color: "white",
                },
                color: "black",
                textTransform: "none",
              }}
              variant="contained"
            >
              Login
            </Button>
          </div>

          <div className=" hidden lg:block">
            {" "}
            <Button
              sx={{
                backgroundColor: "#1A73E8",
                textTransform: "none",
              }}
              variant="contained"
            >
              Try for free
            </Button>
          </div>
          <div
            onClick={(e) => setToggleDrawer(true)}
            className="block cursor-pointer lg:hidden"
          >
            <MenuIcon sx={{ color: "black", fontSize: "1.8rem" }} />
          </div>
        </div>
      </div>
      <NavDrawer
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
      />
    </>
  );
};

export default Navbar;
