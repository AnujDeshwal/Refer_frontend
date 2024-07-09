import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast"
import axios from "axios"
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { server } from "../../utils/constants";

const ReferButton = ({
  programs = [
    "Professional Certificate Program in Product Management",
    "PG Certificate Program in Strategic Product Management",
    "Executive Program in Data Driven Product Management",
    "Executive Program in Product Management and Digital Transformation",
    "Executive Program in Product Management",
    "Advanced Certification in Product Management",
    "Executive Program in Product Management and Project Management",
  ],
}) => {
  const [open, setOpen] = useState(false);
  const [friend, setFriend] = useState(false);
  const [done, setDone] = useState(false);
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fphone, setfphone] = useState("");
  const handleUserSubmit = (e) => {
    e.preventDefault();
    
    setFriend(true);
    setUser(false);
  };
  const handleFriendSubmit = (e) => {
    e.preventDefault();
    const config = {
      withCredentials: true,
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    };
    const toastId = toast.loading("Creating Referral");
    axios.post(`${server}/create-refer` ,{referrerName:name , referrerEmail:email , referrerPhone:phone ,refereeName:fname , refereeEmail:femail , refereePhone:fphone , selectedProgram  } , config).then(({data})=>{
      setDone(true);
    setFriend(false);
      toast.success(`Referred successfully`, { id: toastId })

  }).catch((err)=>toast.error(err?.response?.data?.message, { id: toastId }))
    
  };
  return (
    <div>
      <Button
        onClick={(e) => {setOpen(true); setUser(true)}}
        variant="contained"
        sx={{
          textTransform: "none",
          fontSize: "1.1rem",
          minHeight: "3rem",
          width: "9rem",
          backgroundColor: "#1A73E8",
        }}
      >
        Refer now
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-full h-full flex flex-col justify-center items-center ">
          {/* Referre details and referee details */}

          {user && (
            <div className="relative w-[24rem] h-[27rem] bg-white flex flex-col gap-8 justify-center rounded-2xl items-center ">
              <div
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer"
              >
                {" "}
                <CloseIcon />
              </div>

              <h1 className="font-bold text-gray-700 text-[1.1rem] ">
                Please fill your details in the form
              </h1>
              <form
                onSubmit={handleUserSubmit}
                className="flex flex-col gap-[0.3rem]  items-center"
              >
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="Full Name"
                      variant="outlined"
                      placeholder="John Doe"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                        title:
                          "Full name should only contain letters, spaces, and common punctuation like commas, periods, and hyphens.",
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      placeholder="example@example.com"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                        title: "Please enter a valid email address.",
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      placeholder="123-456-7890"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "[0-9]{3}[0-9]{3}[0-9]{4}",
                        title:
                          "Phone number should be in the format: 1234567890",
                      }}
                    />
                  </div>
                </div>
                <Button type="submit" fullWidth variant="contained">
                  Next
                </Button>
              </form>
            </div>
          )}
          {friend && (
            <div className="relative w-[24rem] h-[27rem] bg-white flex flex-col gap-8 justify-center rounded-2xl items-center ">
              <div
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer"
              >
                {" "}
                <CloseIcon />
              </div>

              <h1 className="font-bold text-gray-700 text-[1.1rem] ">
                Please fill your friend's details
              </h1>
              <form
                onSubmit={handleFriendSubmit}
                className="flex flex-col gap-[0.3rem]  items-center"
              >
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      label="Full Name"
                      variant="outlined"
                      placeholder="John Doe"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                        title:
                          "Full name should only contain letters, spaces, and common punctuation like commas, periods, and hyphens.",
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={femail}
                      onChange={(e) => setFemail(e.target.value)}
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      placeholder="example@example.com"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                        title: "Please enter a valid email address.",
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <TextField
                      value={fphone}
                      onChange={(e) => setfphone(e.target.value)}
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      placeholder="123-456-7890"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        pattern: "[0-9]{3}[0-9]{3}[0-9]{4}",
                        title:
                          "Phone number should be in the format: 1234567890",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <FormControl
                      variant="outlined"
                      className="w-[16rem] min-h-12"
                      required
                    >
                      <InputLabel id="program-select-label">
                        Program to refer
                      </InputLabel>
                      <Select
                        labelId="program-select-label"
                        id="program-select"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        label="Select Program"
                      >
                        {programs.map((program, index) => (
                          <MenuItem key={index} value={program}>
                            {program}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <Button type="submit" fullWidth variant="contained">
                  Submit
                </Button>
              </form>
            </div>
          )}
          {done && <div className="w-[25rem] h-[25rem] bg-white rounded-2xl p-4 gap-8 flex flex-col justify-center items-center">
            <h1 className="text-[2rem] text-[#1A73E8] font-bold">Thank you for referring</h1>
            <p className="font-mediumm text-[1.3rem] text-center">If the referral is valid and they enrol in the program,you will be eligible for a referral reward from Accredian</p>
            <Button onClick={()=>{setOpen(false);setDone(false)}} fullWidth variant="outlined">Go Back</Button>
          </div>}
        </div>
      </Modal>
    </div>
  );
};

export default ReferButton;
