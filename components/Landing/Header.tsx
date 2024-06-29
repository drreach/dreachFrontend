import React from "react";
import Info from "./Info";
import Navbar from "../Navbar";
import Intro from "./Intro";

const Header = () => {
  return (
    <div className={`w-full pt-20 flex flex-col`}>
      <Intro />
    </div>
  );
};

export default Header;
