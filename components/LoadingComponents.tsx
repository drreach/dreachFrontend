import React from "react";

const LoadingComponents = () => {
  return (
    <div className="w-full min-h-screen my-5 flex justify-center items-center">
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponents;
