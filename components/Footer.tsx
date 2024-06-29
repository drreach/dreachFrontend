import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center no-underline">
              <img
                src="/assets/logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                Dreach
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[50px] w-full md:grid-cols-3 md:w-2/4 justify-between">
            <div>
              <h2 className="mb-3 text-sm font-bold  uppercase text-white">
                Services
              </h2>
              <div className="flex flex-col text-gray-400 gap-2">
                <Link
                  target="_blank"
                  href={`/finddoctors?mode=VIDEO_CONSULT`}
                  className="mt-1 no-underline font-medium cursor-pointer hover:text-blue-500 text-gray-400"
                >
                  Video
                </Link>
                <Link
                  target="_blank"
                  href={`/finddoctors?mode=CLINIC_VISIT`}
                  className="mt-1 no-underline font-medium cursor-pointer hover:text-blue-500 text-gray-400"
                >
                  Clinic Visit
                </Link>
                <Link
                  target="_blank"
                  href={`/finddoctors?mode=HOME_VISIT`}
                  className="mt-1 no-underline font-medium cursor-pointer hover:text-blue-500 text-gray-400"
                >
                  Home Visit
                </Link>
                <Link
                  target="_blank"
                  href="/findhybriddoctors"
                  className="mt-1 no-underline font-medium cursor-pointer hover:text-blue-500 text-gray-400"
                >
                  Hybrid
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <div className=" text-gray-400 font-medium flex flex-col">
                <span className="mb-4">
                  <a
                    href="https://instagram.com/dreach"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </span>
                {/* <span>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </span> */}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Contact Us
              </h2>

              <div className="flex flex-col">
                <span className="text-gray-300">+917733655</span>
                <a href="mailto:support@dreach.in">support@dreach.in</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023{" "}
            <a href="https://dreach.in/" className="no-underline">
              HealthUnity Solutions Pvt Ltd.
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
