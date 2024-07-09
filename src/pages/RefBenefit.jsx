import React, { useEffect, useState } from "react";
import scholar from "../assets/scholar.png";
import Switch from "@mui/material/Switch";
import ReferButton from "../components/shared/ReferButton"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
const RefBenefit = ({
  rows = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ],
  allCourses = [
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program:
        "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ],
}) => {
  const [rowKey, setRowKey] = useState(0);
  const [courses, setCourses] = useState([]);
  const [val, setVal] = useState("ALL PROGRAMS");
  //   Find the programs according to the filter
  useEffect(() => {
    if (val === "ALL PROGRAMS") setCourses(allCourses);
    else {
      const needed = allCourses.filter(({ program }) =>
        program
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(val.toLowerCase().split(" ").join(""))
      );
      console.log("this", needed);
      setCourses(needed);
    } 
  }, [rowKey]);
  return (
    <div id="benefits"  className=" h-[200vh] relative  sm:h-[120vh] mt-[5rem]  gap-12 sm:gap-0  w-screen flex flex-col justify-around items-center">
      <h1 className="text-[1.3rem] absolute top-0 sm:top-12">
        What are the{" "}
        <span className="text-blue-500 mt-12  font-medium">Referral Benefits?</span>{" "}
      </h1>

      <div className="  flex flex-col sm:flex-row  px-8 justify-around items-center gap-16 sm:gap-8">
        {/* first table  */}
        <div className=" h-[70vh] relative ">
          <table className="bg-white w-[16rem] rounded-2xl shadow-2xl text-[0.8rem] sm:text-sm text-left rtl:text-right ">
            <tbody>
              {rows.map((row, index) => (
                <tr
                  className={` bg-[#FFFFF] `}
                  onClick={(e) => {
                    setRowKey(index);
                    setVal(row);
                  }}
                >
                  <th
                    scope="row"
                    className={`text-left rounded-2xl  px-6 py-4 border-b border-b-gray-400 justify-between  font-medium flex gap-4 00 ${
                      index === rowKey
                        ? "bg-[#1a73e8] text-white"
                        : "text-gray-9 "
                    } `}
                  >
                    {row}
                    <KeyboardArrowRightIcon />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* second table  */}

        <div className="h-[100vh]  sm:mt-[8rem] flex flex-col ">
          <div className="   flex justify-end items-center">
            <h1>Enrolled</h1>
            <Switch defaultChecked />
          </div>
          <div className="relative w-[68vw] sm:w-[50vw] [lg:w-[70vw] shadow-2xl  overflow-x-auto">
            <table className="shadow-2xl rounded-2xl w-full text-sm text-left rtl:text-right ">
              <thead className="text-xs uppercase ">
                <tr className="bg-[#AECCF5] font-medium text-[#1350A0]">
                  <th
                    scope="col"
                    className="w-[32rem] px-6 py-3 border-r border-gray-500 rounded-s-lg"
                  >
                    Programs
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-r border-gray-500"
                  >
                    Referrer Bonus
                  </th>
                  <th scope="col" className="px-6 py-3  rounded-e-lg">
                    Referee Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.length > 0 ? (
                  courses.map(
                    ({ program, referrerBonus, refereeBonus }, index) => (
                      <tr className="bg-[#F8FBFF]">
                        <th
                          scope="row"
                          className="w-[32rem] px-6 py-4 border-r border-gray-400 font-medium flex gap-4 text-gray-900   "
                        >
                          <img
                            src={scholar}
                            className="w-[1.7em] h-[1.2rem]"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                          {program}
                        </th>
                        <td className=" px-6 py-4 border-r border-gray-400">
                          {referrerBonus}
                        </td>
                        <td className=" px-6 py-4 ">{refereeBonus}</td>
                      </tr>
                    )
                  )
                ) : (
                  <th
                    scope="row"
                    className="w-[32rem] px-6 py-4  font-medium flex gap-4 text-gray-900   "
                  >
                    {" "}
                    <tr className="bg-[#F8FBFF] ">Programs not available</tr>
                  </th>
                )}
              </tbody>
            </table>
          </div>
          <div className=" mt-8  flex justify-end items-center">
            <Button
              variant="outlined"
              sx={{ textTransform: "none", }}
            >
              Show more{" "}
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
         <ReferButton/>
        </div>
        
      </div>
      
    </div>
  );
};

export default RefBenefit;
