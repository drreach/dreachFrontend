import React from "react";

const Loader = () => {
  return (
    <div className="w-full my-5 flex justify-center items-center">
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
