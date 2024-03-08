import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full bg-white flex justify-center p-5">
      <div className=" flex flex-col w-full gap-[50px]">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-[#07A6FB] text-[40px] font-bold">We Provide</h1>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col max-w-screen-xl gap-3 w-full">
            <div className="grid w-full md:w-auto gap-4 grid-cols-1 md:grid-cols-4">
              <Link
                target="_blank"
                className="no-underline"
                href={`/finddoctors?mode=VIDEO_CONSULT`}
              >
                <div className="flex cursor-pointer hover:scale-105 duration-500 bg-blue-500 rounded-md h-[130px] items-center flex-col w-full justify-center px-4">
                  <img
                    className="w-[100px] max-h-[80px]"
                    src="/onlinemode.png"
                    alt=""
                  />
                  <h1 className="text-[28px] text-white font-bold">
                    Online Mode
                  </h1>
                </div>
              </Link>
              <Link
                target="_blank"
                className="no-underline"
                href={`/finddoctors?mode=CLINIC_VISIT`}
              >
                {" "}
                <div className="flex cursor-pointer hover:scale-105 duration-500 bg-blue-500 rounded-md h-[130px] items-center flex-col w-full justify-center px-4">
                  <img
                    className="w-[100px] max-h-[80px]"
                    src="/offlinemode.png"
                    alt=""
                  />
                  <h1 className="text-[28px] text-white font-bold">
                    Offline Mode
                  </h1>
                </div>
              </Link>
              <Link
                target="_blank"
                className="no-underline"
                href={`/finddoctors?mode=HOME_VISIT`}
              >
                {" "}
                <div className="flex hover:scale-105 cursor-pointer duration-500 bg-blue-500 rounded-md h-[130px] items-center flex-col w-full justify-center px-4">
                  <img
                    className="w-[150px] max-h-[80px] h-auto"
                    src="/homevisit.png"
                    alt=""
                  />
                  <h1 className="text-[28px] text-white font-bold">
                    Home Mode
                  </h1>
                </div>
              </Link>

              <Link
                target="_blank"
                className="no-underline"
                href={`/findhybriddoctors`}
              >
                <div className="flex hover:scale-105 cursor-pointer duration-500 bg-blue-500 rounded-md h-[130px] items-center flex-col w-full justify-center px-4">
                  <img
                    className="w-[100px] h-auto"
                    src="/videocall.png"
                    alt=""
                  />
                  <h1 className="text-[28px] text-white font-bold">
                    Hybrid Mode
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
          <img className="w-[700px]" src="/hc.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
