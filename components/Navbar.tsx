"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import Intro from "./Landing/Intro";
import Info from "./Landing/Info";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

// import { Info } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const session = useSession();
  const [show, setShow] = React.useState(false);
  return (
    <div className={`fixed z-40 top-0 w-full flex flex-col }`}>
      <div className="w-full py-1 text-black bg-[#FFFFFF] md:px-5">
        <div className="w-full px-2 justify-between items-center  mx-auto flex">
          <div className="flex items-center gap-3">
            <Link href="/" className="no-underline">
              {" "}
              <Image
                src="/assets/logo.png"
                className="w-[60px] h-[60px]"
                alt=""
                width={150}
                height={150}
              />
            </Link>
            <Link href="/" className="no-underline">
              <h1 className="text-[20px] font-bold text-cyan-600">Dr.Reach</h1>
            </Link>
          </div>
          <div>
            <ul className="gap-5 hidden md:flex">
              <Link href="/">
                {" "}
                <Link
                  href="/"
                  className="hover:text-green-600 no-underline font-bold text-gray-600 cursor-pointer"
                >
                  Home
                </Link>
              </Link>
              <li className="hover:text-green-600 font-bold text-gray-600 cursor-pointer">
                About
              </li>
              <li
                onClick={() => {
                  scrollTo("services");
                }}
                className="hover:text-green-600 font-bold text-gray-600 cursor-pointer"
              >
                Services
              </li>
              <li className="hover:text-green-600 font-bold text-gray-600 cursor-pointer">
                Contact
              </li>
            </ul>

            <FiMenu
              onClick={() => setShow((prev) => !prev)}
              className="md:hidden"
              size={25}
            />
          </div>

          <div className="hidden md:flex">
            {session.data ? (
              <div className="flex gap-2">
                <Link
                  href={`/${
                    session.data.data.role === "NORMAL"
                      ? "user"
                      : session.data.data.role === "DOCTOR"
                        ? "doctor"
                        : "admin"
                  }/dashboard`}
                  className="bg-blue-500 no-underline  rounded-md py-2 px-3 text-white font-bold"
                >
                  {/* <FaRegArrowAltCircleRight /> */}
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 no-underline rounded-md py-2 px-3 text-white font-bold"
                >
                  {/* <FaRegArrowAltCircleRight /> */}
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="bg-blue-500 rounded-md no-underline py-2 px-3 text-white font-bold"
              >
                {/* <FaRegArrowAltCircleRight /> */}
                Login
              </Link>
            )}
            {/* <button className="bg-blue-500 group rounded-md py-2 px-3 duration-200 ease-linear flex items-center gap-2 text-white font-bold hover:bg-teal-600">
    Appointment
</button> */}
          </div>
        </div>
        <div
          className={`${
            show ? "h-auto" : "h-0"
          }  overflow-hidden duration-200 ease-linear`}
        >
          <ul className="gap-5  flex-col flex justify-center text-[13px] items-center">
            <li>Home</li>
            <li>About</li>
            <li onClick={() => scrollTo("services")}>Services</li>
            <li>Contact</li>

            {session.data ? (
              <div className="flex flex-col gap-3">
                <Link
                  href={`/${
                    session.data.data.role === "NORMAL"
                      ? "user"
                      : session.data.data.role === "DOCTOR"
                        ? "doctor"
                        : "admin"
                  }/dashboard`}
                  className="bg-blue-500 no-underline rounded-md py-2 px-3 text-white font-bold"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 rounded-md py-2 px-3 text-white font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="bg-blue-500 rounded-md py-2 px-3 text-white font-bold"
                onClick={() => {}}
              >
                Login
              </Link>
            )}
            {/* <button className="bg-blue-500 rounded-md py-2 px-3 text-white font-bold">
              Appointment
            </button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
