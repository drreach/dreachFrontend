"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setActivePatientsProfileTab } from "@/Redux/reducers/UserReducers";
import React from "react";
import Image from "next/image";

const PatientsProfile = () => {
  const activeTab = useAppSelector(
    (state) => state.userReducer.activePatientsProfileTab,
  );
  const disatch = useAppDispatch();
  return (
    <>
      <div className="breadcrumb-bar px-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Profile
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Profile</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
              {/* Profile Widget */}
              <div className="card widget-profile pat-widget-profile">
                <div className="card-body">
                  <div className="pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <Image
                          src="/assets/patients/patient.jpg"
                          alt="User Image"
                          width={150}
                          height={150}
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5>
                            <b>Patient ID :</b> PT0016
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> Newyork,
                            United States
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="patient-info">
                    <ul>
                      <li>
                        Phone <span>+1 952 001 8563</span>
                      </li>
                      <li>
                        Age <span>38 Years, Male</span>
                      </li>
                      <li>
                        Blood Group <span>AB+</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Profile Widget */}
              {/* Last Booking */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Last Booking</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="media align-items-center">
                      <div className="mr-3">
                        <Image
                          alt="Image placeholder"
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          className="avatar  rounded-circle"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="media-body">
                        <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                        <span className="d-block text-sm text-muted">
                          Dentist
                        </span>
                        <span className="d-block text-sm text-muted">
                          14 Nov 2019 5.00 PM
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media align-items-center">
                      <div className="mr-3">
                        <Image
                          alt="Image placeholder"
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          className="avatar  rounded-circle"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="media-body">
                        <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                        <span className="d-block text-sm text-muted">
                          Dentist
                        </span>
                        <span className="d-block text-sm text-muted">
                          12 Nov 2019 11.00 AM
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* /Last Booking */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="user-tabs">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                      <li
                        onClick={() => disatch(setActivePatientsProfileTab(0))}
                        className="nav-item"
                      >
                        <a
                          className={`nav-link ${
                            activeTab === 0 ? "active" : ""
                          } `}
                          href="#pat_appointments"
                          data-toggle="tab"
                        >
                          Appointments
                        </a>
                      </li>
                      {/* <li className="nav-item">
                    <a className="nav-link" href="#pres" data-toggle="tab">
                      <span>Prescription</span>
                    </a>
                  </li> */}
                      <li
                        onClick={() => disatch(setActivePatientsProfileTab(1))}
                        className="nav-item"
                      >
                        <a
                          className={`nav-link ${
                            activeTab === 1 ? "active" : ""
                          } `}
                          href="#medical"
                          data-toggle="tab"
                        >
                          <span className="med-records">Medical Records</span>
                        </a>
                      </li>
                      {/* <li className="nav-item">
                    <a className="nav-link" href="#billing" data-toggle="tab">
                      <span>Billing</span>
                    </a>
                  </li> */}
                    </ul>
                  </div>
                  <div className="tab-content">
                    {/* Appointment Tab */}
                    <div
                      id="pat_appointments"
                      className={`tab-pane fade ${
                        activeTab === 0 ? "show active" : ""
                      }`}
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Doctor</th>
                                  <th>Appt Date</th>
                                  <th>Booking Date</th>

                                  <th>Status</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <Image
                                          className="avatar-img rounded-circle"
                                          src="/assets/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                          width={150}
                                          height={150}
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    14 Nov 2019{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>12 Nov 2019</td>

                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="far fa-edit" /> Edit
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
                    {/* /Appointment Tab */}

                    {/* Medical Records Tab */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === 1 ? "show active" : ""
                      }`}
                      id="medical"
                    >
                      <div className="text-right">
                        <a
                          href="#"
                          className="add-new-btn"
                          data-toggle="modal"
                          data-target="#add_medical_records"
                        >
                          Add Medical Records
                        </a>
                      </div>
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Date </th>
                                  <th>Description</th>
                                  <th>Attachment</th>
                                  <th>Created</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="javascript:void(0);">#MR-0010</a>
                                  </td>
                                  <td>14 Nov 2019</td>
                                  <td>Dental Filling</td>
                                  <td>
                                    <a href="#">dental-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <Image
                                          className="avatar-img rounded-circle"
                                          src="/assets/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                          width={150}
                                          height={150}
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Dental</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="javascript:void(0);"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print" /> Print
                                      </a>
                                      <a
                                        href="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye" /> View
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
                    {/* /Medical Records Tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsProfile;
