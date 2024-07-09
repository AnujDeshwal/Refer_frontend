import { Button, Drawer } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png.png";
import LoginIcon from '@mui/icons-material/Login';
import NavElems from "../shared/NavElems";
const NavDrawer = ({ toggleDrawer = false, setToggleDrawer }) => {
  return (
    <Drawer open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
      <div className=" h-screen w-[18rem]  flex flex-col ">
        <div className="flex p-4 justify-end gap-[3rem] px-4">
          {" "}
            <div
              className="h-[2rem] mt-4 w-[7rem]"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>{" "}
          
          <div
            className=" cursor-pointer "
            onClick={(e) => setToggleDrawer(false)}
          >
            {" "}
            <CloseIcon />
          </div>
        </div>

        <div className="px-12 flex flex-col justify-center font-bold gap-8 items-center text-[1.2rem] mt-8">
          {" "}
          <NavElems />
          <Button fullWidth variant="contained" startIcon={<LoginIcon/>}> Login</Button>
          <Button fullWidth variant="outlined"> Try for free</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
