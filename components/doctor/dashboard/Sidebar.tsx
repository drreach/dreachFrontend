"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const session = useSession();
  const router = usePathname();
  return (
    <div className="profile-sidebar  ">
      <div className="widget-profile pro-widget-content border  ">
        <div className="profile-info-widget bg-gray-500 py-2 rounded-md ">
          <a href="#" className="booking-doc-img">
            <img
              src={`${
                session.data?.data.profilePic
                  ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${session.data.data.profilePic}`
                  : "/assets/doctors/doctor-thumb-02.jpg"
              }`}
              alt="User Image"
            />
          </a>
          <div className="profile-det-info">
            <h3 className="font-bold text-gray-200">
              {session.data?.data.Fname} {session.data?.data.Lname}
            </h3>
            <div className="patient-details">
              <p className="mb-0 text-gray-200">
                -{session.data?.data?.doctorProfile?.specializations?.join(",")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-2  rounded-md">
        <nav className="dashboard-menu">
          <ul>
            <li className={`${router.split("/").length < 4 && "active"}`}>
              <Link href="/doctor/dashboard">
                <i className="fas fa-columns" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            {/* <li>
                      <a href="/doctor/dashboard/appointment">
                        <i className="fas fa-calendar-check" />
                        <span>Appointments</span>
                      </a>
                    </li> */}
            <li className={`${router.includes("mypatients") && "active"}`}>
              <Link href="/doctor/dashboard/mypatients">
                <i className="fas fa-user-injured" />
                <span className="font-medium">My Patients</span>
              </Link>
            </li>
            <li className={`${router.includes("shedule") && "active"}`}>
              <Link href="/doctor/dashboard/shedule">
                <i className="fas fa-hourglass-start" />
                <span className="font-medium">Schedule Timings</span>
              </Link>
            </li>

            <li className={`${router.includes("review") && "active"}`}>
              <Link href="/doctor/dashboard/review">
                <i className="fas fa-star" />
                <span className="font-medium">Reviews</span>
              </Link>
            </li>

            <li>
              <Link href="/doctor/dashboard/profilesettings">
                <i className="fas fa-user-cog" />
                <span className="font-medium">Profile Settings</span>
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => signOut()}>
                <i className="fas fa-sign-out-alt" />
                <span className="font-medium">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
