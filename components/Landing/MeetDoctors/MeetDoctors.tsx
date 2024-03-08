import React, { Suspense } from "react";
import DoctorsCard from "./DoctorsCard";
import GetDoctors from "./GetDoctors";

const data = [
  {
    name: "Dr. John Doe",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-1.jpg",
  },
  {
    name: "Dr. Raman Sharma",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-2.jpg",
  },
  {
    name: "Dr. Peaky Blinder",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-3.jpg",
  },
  {
    name: "Dr. John Doe",
    speciality: "Cardiology",
    degree: "MBBS",
    image: "/assets/team-1.jpg",
  },
];

const MeetDoctors = () => {


    
  return (
    <div className="w-full px-1.5 my-[100px] bg-[#E9F7FB] p-[50px] ">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#07A6FB] text-[20px] font-bold">
          | Meet Our Doctors
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#07A6FB] text-[40px] text-center font-bold">Our Popular Doctors</h1>
      </div>
     <Suspense fallback={<div>Loading...</div>}>
      <GetDoctors/>
      </Suspense>
    </div>
  );
};

export default MeetDoctors;
