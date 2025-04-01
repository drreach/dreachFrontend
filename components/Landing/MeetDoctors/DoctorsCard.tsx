import Image from "next/image";
import React from "react";
import { GoPlusCircle } from "react-icons/go";

const DoctorsCard = ({
  data,
}: {
  data: {
    name: string;
    speciality: string;
    // degree: string;
    image: string;
  };
}) => {
  return (
    <div className="w-full border border-gray-200 md:hover:scale-105 ease-linear duration-200 relative p-2 flex  rounded-md flex-col h-auto">
      <span className="absolute w-full duration-300 ease-linear h-full hover:bg-teal-500/20"></span>
      <Image
        src={`${data.image ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.image}` : "/assets/doctor-2.jpg"}`}
        className="h-[200px] object-contain rounded-md "
        alt=""
        width={150}
        height={150}
      />
      <div className="w-full flex bg-[#00A6FB] py-2 px-3 justify-between rounded-b-md items-center">
        <div>
          <h1 className="text-[14px] text-white font-bold">{data.name}</h1>
          <p className="text-gray-100">{data.speciality}</p>
          {/* <p className="text-gray-100">{data.degree}</p> */}
        </div>
        <div className="px-4">
          <GoPlusCircle color="white" size={50} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
