import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper bg-white">
        {/* Header */}
        <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a href="index-2.html" className="navbar-brand logo">
                <Image
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index-2.html" className="menu-logo">
                  <Image
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                    width={150}
                    height={150}
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li className="has-submenu active">
                  <a href="#">
                    Doctors <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li className="active">
                      <a href="doctor-dashboard.html">Doctor Dashboard</a>
                    </li>
                    <li>
                      <a href="appointments.html">Appointments</a>
                    </li>
                    <li>
                      <a href="schedule-timings.html">Schedule Timing</a>
                    </li>
                    <li>
                      <a href="my-patients.html">Patients List</a>
                    </li>
                    <li>
                      <a href="patient-profile.html">Patients Profile</a>
                    </li>
                    <li>
                      <a href="chat-doctor.html">Chat</a>
                    </li>
                    <li>
                      <a href="invoices.html">Invoices</a>
                    </li>
                    <li>
                      <a href="doctor-profile-settings.html">
                        Profile Settings
                      </a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="doctor-register.html">Doctor Register</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Patients <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="search.html">Search Doctor</a>
                    </li>
                    <li>
                      <a href="doctor-profile.html">Doctor Profile</a>
                    </li>
                    <li>
                      <a href="booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="booking-success.html">Booking Success</a>
                    </li>
                    <li>
                      <a href="patient-dashboard.html">Patient Dashboard</a>
                    </li>
                    <li>
                      <a href="favourites.html">Favourites</a>
                    </li>
                    <li>
                      <a href="chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="profile-settings.html">Profile Settings</a>
                    </li>
                    <li>
                      <a href="change-password.html">Change Password</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Pages <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="voice-call.html">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call.html">Video Call</a>
                    </li>
                    <li>
                      <a href="search.html">Search Doctors</a>
                    </li>
                    <li>
                      <a href="calendar.html">Calendar</a>
                    </li>
                    <li>
                      <a href="components.html">Components</a>
                    </li>
                    <li className="has-submenu">
                      <a href="invoices.html">Invoices</a>
                      <ul className="submenu">
                        <li>
                          <a href="invoices.html">Invoices</a>
                        </li>
                        <li>
                          <a href="invoice-view.html">Invoice View</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blank-page.html">Starter Page</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="forgot-password.html">Forgot Password</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="admin/index.html" target="_blank">
                    Admin
                  </a>
                </li>
                <li className="login-link">
                  <a href="login.html">Login / Signup</a>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital" />
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              {/* User Menu */}
              <li className="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <span className="user-img">
                    <Image
                      className="rounded-circle"
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      width={31}
                      height={31}
                      alt="Darren Elder"
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <Image
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                        className="avatar-img rounded-circle"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <a className="dropdown-item" href="doctor-dashboard.html">
                    Dashboard
                  </a>
                  <a
                    className="dropdown-item"
                    href="doctor-profile-settings.html"
                  >
                    Profile Settings
                  </a>
                  <a className="dropdown-item" href="login.html">
                    Logout
                  </a>
                </div>
              </li>
              {/* /User Menu */}
            </ul>
          </nav>
        </header>
        {/* /Header */}
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <Image
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                          width={150}
                          height={150}
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">
                            BDS, MDS - Oral &amp; Maxillofacial Surgery
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <a href="doctor-dashboard.html">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="appointments.html">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="my-patients.html">
                            <i className="fas fa-user-injured" />
                            <span>My Patients</span>
                          </a>
                        </li>
                        <li>
                          <a href="schedule-timings.html">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </a>
                        </li>
                        <li>
                          <a href="invoices.html">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                          </a>
                        </li>
                        <li>
                          <a href="reviews.html">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat-doctor.html">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-profile-settings.html">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="social-media.html">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-change-password.html">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-bar circle-bar1">
                                <div
                                  className="circle-graph1"
                                  data-percent={75}
                                >
                                  <Image
                                    src="assets/img/icon-01.png"
                                    className="img-fluid"
                                    alt="patient"
                                    width={150}
                                    height={150}
                                  />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Total Patient</h6>
                                <h3>1500</h3>
                                <p className="text-muted">Till Today</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-bar circle-bar2">
                                <div
                                  className="circle-graph2"
                                  data-percent={65}
                                >
                                  <Image
                                    src="assets/img/icon-02.png"
                                    className="img-fluid"
                                    alt="Patient"
                                    width={150}
                                    height={150}
                                  />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Today Patient</h6>
                                <h3>160</h3>
                                <p className="text-muted">06, Nov 2019</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="circle-bar circle-bar3">
                                <div
                                  className="circle-graph3"
                                  data-percent={50}
                                >
                                  <Image
                                    src="assets/img/icon-03.png"
                                    className="img-fluid"
                                    alt="Patient"
                                    width={150}
                                    height={150}
                                  />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Appoinments</h6>
                                <h3>85</h3>
                                <p className="text-muted">06, Apr 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mb-4">Patient Appoinment</h4>
                    <div className="appointment-tab">
                      {/* Appointment Tab */}
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#upcoming-appointments"
                            data-toggle="tab"
                          >
                            Upcoming
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#today-appointments"
                            data-toggle="tab"
                          >
                            Today
                          </a>
                        </li>
                      </ul>
                      {/* /Appointment Tab */}
                      <div className="tab-content">
                        {/* Upcoming Appointment Tab */}
                        <div
                          className="tab-pane show active"
                          id="upcoming-appointments"
                        >
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Richard Wilson <span>#PT0016</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        11 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          10.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$150</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient1.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Charlene Reed <span>#PT0001</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        3 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          11.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$200</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient2.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Travis Trimble <span>#PT0002</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        1 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          1.00 PM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient3.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Carl Kelly <span>#PT0003</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        30 Oct 2019{" "}
                                        <span className="d-block text-info">
                                          9.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient4.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Michelle Fairfax{" "}
                                            <span>#PT0004</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        28 Oct 2019{" "}
                                        <span className="d-block text-info">
                                          6.00 PM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient5.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Gina Moore <span>#PT0005</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        27 Oct 2019{" "}
                                        <span className="d-block text-info">
                                          8.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$250</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Upcoming Appointment Tab */}
                        {/* Today Appointment Tab */}
                        <div className="tab-pane" id="today-appointments">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient6.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Elsie Gilley <span>#PT0006</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          6.00 PM
                                        </span>
                                      </td>
                                      <td>Fever</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$300</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient7.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Joan Gardner <span>#PT0006</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          5.00 PM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient8.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Daniel Griffing <span>#PT0007</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          3.00 PM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient9.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Walter Roberson <span>#PT0008</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          1.00 PM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient10.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Robert Rhodes <span>#PT0010</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          10.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$175</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="patient-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <Image
                                              className="avatar-img rounded-circle"
                                              src="assets/img/patients/patient11.jpg"
                                              alt="User Image"
                                              width={150}
                                              height={150}
                                            />
                                          </a>
                                          <a href="patient-profile.html">
                                            Harry Williams <span>#PT0011</span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        14 Nov 2019{" "}
                                        <span className="d-block text-info">
                                          11.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>New Patient</td>
                                      <td className="text-center">$450</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-info-light"
                                          >
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-success-light"
                                          >
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light"
                                          >
                                            <i className="fas fa-times" />{" "}
                                            Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Today Appointment Tab */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
        <footer className="footer">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <Image
                        src="assets/img/footer-logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-dribbble" />{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Patients</h2>
                    <ul>
                      <li>
                        <a href="search.html">
                          <i className="fas fa-angle-double-right" /> Search for
                          Doctors
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="fas fa-angle-double-right" /> Login
                        </a>
                      </li>
                      <li>
                        <a href="register.html">
                          <i className="fas fa-angle-double-right" /> Register
                        </a>
                      </li>
                      <li>
                        <a href="booking.html">
                          <i className="fas fa-angle-double-right" /> Booking
                        </a>
                      </li>
                      <li>
                        <a href="patient-dashboard.html">
                          <i className="fas fa-angle-double-right" /> Patient
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Doctors</h2>
                    <ul>
                      <li>
                        <a href="appointments.html">
                          <i className="fas fa-angle-double-right" />{" "}
                          Appointments
                        </a>
                      </li>
                      <li>
                        <a href="chat.html">
                          <i className="fas fa-angle-double-right" /> Chat
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="fas fa-angle-double-right" /> Login
                        </a>
                      </li>
                      <li>
                        <a href="doctor-register.html">
                          <i className="fas fa-angle-double-right" /> Register
                        </a>
                      </li>
                      <li>
                        <a href="doctor-dashboard.html">
                          <i className="fas fa-angle-double-right" /> Doctor
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <p>
                          {" "}
                          3556 Beech Street, San Francisco,
                          <br /> California, CA 94108{" "}
                        </p>
                      </div>
                      <p>
                        <i className="fas fa-phone-alt" />
                        +1 315 369 5943
                      </p>
                      <p className="mb-0">
                        <i className="fas fa-envelope" />
                        doccure@example.com
                      </p>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container-fluid">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        <a href="templateshub.net">Templates Hub</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    {/* Copyright Menu */}
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <a href="term-condition.html">Terms and Conditions</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">Policy</a>
                        </li>
                      </ul>
                    </div>
                    {/* /Copyright Menu */}
                  </div>
                </div>
              </div>
              {/* /Copyright */}
            </div>
          </div>
          {/* /Footer Bottom */}
        </footer>
        {/* /Footer */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Dashboard;
