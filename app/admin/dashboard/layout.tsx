import AdminDashboard from "@/components/Admin/dashboard/AdminDashboard";
import DashHeader from "@/components/DashHeader";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiHome, FiLayout, FiStar, FiUser, FiUserPlus } from "react-icons/fi";
import React from "react";
import Sidebar from "@/components/Admin/dashboard/Sidebar";
import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOption);

  if (!session || session.data.role !== "ADMIN") {
    // return redirect("/");
  }
  return (
    <div className="main-wrapper">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
          </a>
          <a href="index.html" className="logo logo-small">
            <Image
              src="/assets/logo-small.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </a>
        </div>
        {/* /Logo */}
        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <Image
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/doctor-3.jpg"
                            width={250}
                            height={250}
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                            Schedule{" "}
                            <span className="noti-title">her appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <Image
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/patients/patient1.jpg"
                            width={150}
                            height={150}
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Charlene Reed</span>{" "}
                            has booked her appointment to{" "}
                            <span className="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <Image
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient2.jpg"
                            width={150}
                            height={150}
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Travis Trimble</span>{" "}
                            sent a amount of $210 for his{" "}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <Image
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient3.jpg"
                            width={150}
                            height={150}
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Carl Kelly</span> send
                            a message{" "}
                            <span className="noti-title"> to his doctor</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <Image
                  className="rounded-circle"
                  src="/assets/profiles/avatar-01.jpg"
                  width={31}
                  height={31}
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <Image
                    src="assets/profiles/avatar-01.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>
      {/* /Header */}
      {/* Sidebar */}

      <Sidebar />

      {/* /Sidebar */}
      {/* Page Wrapper */}
      <div className="page-wrapper">{children}</div>
      {/* /Page Wrapper */}
    </div>
  );
}
