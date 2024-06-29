"use client";
import DashHeader from "@/components/DashHeader";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiHome, FiLayout, FiStar, FiUser, FiUserPlus } from "react-icons/fi";
import React from "react";
import { da } from "date-fns/locale";
import { convertDateToFormat, loadToast, updateToast } from "@/utils/utils";
import { actionsOnUser } from "@/ServerActions/Admin/admins";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setLoading } from "@/Redux/reducers/UserReducers";

interface UnverifiedDoctors {
  id: string;
  document: string;
  user: {
    Fname: string;
    Lname: string;
    email: string;
    gender: string;
    profilePic: string;
    username: string;
  };
  createdAt: string;
}

const AdminDashboard = ({
  data,
  patientsNo,
  DoctorsNo,
}: {
  data: UnverifiedDoctors[];
  patientsNo: number;
  DoctorsNo: number;
}) => {
  const loading = useAppSelector((state) => state.userReducer.loading);
  const dispacth = useAppDispatch();
  return (
    <>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className=" text-primary border-primary">
                    <FiUserPlus size={39} />

                    {/* <img src="/assets/logo.png" alt="" /> */}
                    {/* Hello */}
                  </span>
                  <div className="dash-count">
                    <h3>{DoctorsNo}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Doctors</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className=" text-success">
                    <FiUser size={39} />
                  </span>
                  <div className="dash-count">
                    <h3>{patientsNo}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Patients</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success w-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="text-danger border-danger">
                    <FiLayout size={39} />
                  </span>
                  <div className="dash-count">
                    <h3>0</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Appointment</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-danger w-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Recent Orders */}
            <div className="card card-table">
              <div className="card-header">
                <h4 className="card-title">Doctors Verification</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Joined Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((d, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="#" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={`${
                                        d.user.profilePic
                                          ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`
                                          : "/assets/doctor-2.jpg"
                                      } `}
                                      alt="User Image"
                                    />
                                  </a>
                                  <Link href={`#`} className="no-underline">
                                    {d.user.Fname} {d.user.Lname}
                                  </Link>
                                </h2>
                              </td>
                              <td>{d.user.gender}</td>
                              <td>{d.user.email}</td>

                              <td>{convertDateToFormat(d.createdAt)}</td>

                              <td>
                                <div className="">
                                  {loading ? (
                                    <p>Loading...</p>
                                  ) : (
                                    <div className="flex gap-2">
                                      <a
                                        target="_blank"
                                        href={`https://storage.googleapis.com/kiitconnect_bucket/doctorDocuments/${d.document}`}
                                        className="btn btn-secondary btn-sm"
                                      >
                                        Document
                                      </a>
                                      <button
                                        onClick={async () => {
                                          dispacth(setLoading(true));
                                          const toastId =
                                            loadToast("Approving Doctor,");

                                          const res = await actionsOnUser(
                                            "APPROVED",
                                            d.id,
                                          );
                                          if (res.status === 200) {
                                            return updateToast(
                                              toastId,
                                              "Doctor Approved",
                                              "success",
                                            );
                                          }
                                          updateToast(
                                            toastId,
                                            res.message,
                                            "error",
                                          );
                                          dispacth(setLoading(false));
                                          console.log(res);
                                        }}
                                        type="button"
                                        className="btn btn-success btn-sm"
                                      >
                                        Accept
                                      </button>
                                      <button
                                        onClick={async () => {
                                          dispacth(setLoading(true));
                                          const toastId =
                                            loadToast("Rejecting Doctor,");
                                          const res = await actionsOnUser(
                                            "REJECTED",
                                            d.id,
                                          );
                                          if (res.status === 200) {
                                            return updateToast(
                                              toastId,
                                              "Doctor Rejected",
                                              "success",
                                            );
                                          }
                                          updateToast(
                                            toastId,
                                            res.message,
                                            "error",
                                          );
                                          dispacth(setLoading(false));

                                          // console.log(res);
                                        }}
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
