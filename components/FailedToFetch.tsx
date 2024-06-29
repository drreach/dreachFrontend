import React from "react";

const FailedToFetch = ({ message }: { message: string }) => {
  return (
    <div className="min-h-screen  w-full h-full justify-center flex ">
      <div className="  w-full rounded-md justify-center items-center  full flex ">
        <div className="w-[30rem] p-5 h-auto   rounded-md border border-gray-700">
          <h1 className="text-xl">Error Occured!</h1>
          <p className="pt-6">{message}</p>
          {/* <p style={paragraph.style} className='pt-6'>{error.message}</p> */}
        </div>
      </div>
    </div>
  );
};

export default FailedToFetch;
