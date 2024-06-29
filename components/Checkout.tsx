"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setAptFor, setCurrentLocation } from "@/Redux/reducers/UserReducers";
import { doctorAppointment } from "@/ServerActions/Doctor/doctor";
import { convertDateToFormat, loadToast, updateToast } from "@/utils/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Data {
  doctor: {
    schedules: {
      id: string;
      doctorProfileId: string;
      OnlineShedule: string[];
      DeskShedule: [];
    };
    fee: number | null;
    id: string;
    mode: string;
    reason: string;
    user: {
      Fname: string;
      Lname: string;
      address: {
        address: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
      };
      profilePic: string;
    };
  };
  isAvailable: boolean;
}

const Checkout = ({
  data,
  time,
  date,
  mode,
}: {
  data: Data;
  time?: string;
  date?: string;
  mode: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const session = useSession();

  const router = useRouter();

  const apptFor = useAppSelector((state) => state.userReducer.apptFor);
  const dispatch = useAppDispatch();

  const location = useAppSelector((state) => state.userReducer.currentLocation);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //   dispatch(setCurrentLocation(position.coords.latitude));
          dispatch(
            setCurrentLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            }),
          );
          console.log(position.coords);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const submit = async (formData: any) => {
    if (!session || !session.data)
      return toast.error("Please Login to Book Appointment");

    if (location.lat === 0.0 || location.long === 0)
      return toast.error("Location is Required");
    if (!formData.reason) return toast.error("Reason is Required");
    if (!location.lat || !location.long)
      return toast.error("Location is Required");
    const toastId = loadToast("Please wait,Booking Appointment");
    const res = await doctorAppointment(
      data.doctor.id,
      formData,
      session.data?.user.id,
      date!,
      time!,
      location.lat,
      location.long,
      apptFor === ("OTHER" || "MY_FAMILY"),
      mode,
    );

    console.log(res);

    if (res === 201) {
      updateToast(toastId, "Appointment Booked Successfully", "success");
      return router.push(
        `/booked?h_doctorName=${data.doctor.user.Fname} ${data.doctor.user.Lname}&h_apptDate=${date}&h_slotTime=${time}`,
      );
    }
    return updateToast(toastId, "Failed to Book Appointment", "error");
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Checkout</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  {/* Checkout Form */}
                  <form onSubmit={handleSubmit(submit)}>
                    {/* Personal Information */}
                    <div className="info-widget">
                      <h4 className="card-title">Personal Information</h4>

                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Book For <span className="text-red-600">*</span>
                            </label>
                            <select
                              onChange={(e) => {
                                dispatch(setAptFor(e.target.value));
                              }}
                              defaultValue={apptFor}
                              className="form-select"
                              aria-label="Default select example"
                              name=""
                              id=""
                            >
                              <option value="ME">Me</option>
                              <option value="MY_FAMILY">My family</option>
                              <option value="OTHER">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              First Name <span className="text-red-600">*</span>
                            </label>
                            <input
                              {...register("Fname", {
                                required: apptFor === "ME" ? false : true,
                              })}
                              disabled={apptFor === "ME"}
                              defaultValue={
                                apptFor === "ME"
                                  ? `${session?.data?.data?.Fname}`
                                  : ""
                              }
                              className="form-control"
                              type="text"
                            />
                            {errors.Fname && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Last Name <span className="text-red-600">*</span>
                            </label>
                            <input
                              disabled={apptFor === "ME"}
                              {...register("Lname", {
                                required: apptFor === "ME" ? false : true,
                              })}
                              defaultValue={
                                apptFor === "ME"
                                  ? `${session?.data?.data?.Lname}`
                                  : ""
                              }
                              className="form-control"
                              type="text"
                            />
                            {errors.Lname && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Email <span className="text-red-600">*</span>
                            </label>
                            <input
                              disabled={apptFor === "ME"}
                              {...register("email", {
                                required: apptFor === "ME" ? false : true,
                              })}
                              className="form-control"
                              type="email"
                              defaultValue={
                                apptFor === "ME"
                                  ? `${session?.data?.data?.email}`
                                  : ""
                              }
                            />
                            {errors.email && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Phone <span className="text-red-600">*</span>
                            </label>
                            <input
                              {...register("contact", {
                                required: apptFor === "ME" ? false : true,
                              })}
                              className="form-control"
                              type="text"
                              defaultValue={session.data?.data.contact}
                              disabled={apptFor === "ME"}
                            />
                            {errors.contact && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>{" "}
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Appointment Reason{" "}
                              <span className="text-red-600">*</span>
                            </label>
                            <textarea
                              {...register("reason", {
                                required: true,
                              })}
                              className="form-control"
                            />
                            {errors.reason && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        {/* <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Latitue</label>
                            <input
                              className="form-control"
                              defaultValue={location.lat}
                              type="number"
                              disabled
                              value={location.lat}
                            />
                            {errors.lat && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>{" "} */}
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>
                              Lat/Long <span className="text-red-600">*</span>
                            </label>
                            <input
                              className="form-control"
                              defaultValue={
                                "Lat: " +
                                location.lat +
                                " Long: " +
                                location.long
                              }
                              value={
                                "Lat: " +
                                location.lat +
                                " Long: " +
                                location.long
                              }
                              type="string"
                              disabled
                            />
                            {errors.long && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="exist-customer">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => getLocation()}
                        >
                          Get Current Location
                        </button>
                      </div>
                    </div>
                    {/* /Personal Information */}

                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </form>
                  {/* /Checkout Form */}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 theiaStickySidebar">
              {/* Booking Summary */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Booking Summary</h4>
                </div>
                <div className="card-body">
                  {/* Booking Doctor Info */}
                  <div className="booking-doc-info">
                    <a href="doctor-profile.html" className="booking-doc-img">
                      <img
                        src={`${
                          data.doctor.user.profilePic
                            ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.doctor.user.profilePic}`
                            : "/assets/doctor-2.jpg"
                        } `}
                      />
                    </a>
                    <div className="booking-info">
                      <h4>
                        <a href="doctor-profile.html">
                          {data.doctor.user.Fname}
                          {data.doctor.user.Lname}
                        </a>
                      </h4>

                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" />
                          {data.doctor.user.address.address}
                          {data.doctor.user.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Booking Doctor Info */}
                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date">
                        <li>
                          Date <span>{convertDateToFormat(date)}</span>
                        </li>
                        <li>
                          Time{" "}
                          <span>
                            {" "}
                            {parseInt(time!.split(":")[0], 10) >= 12
                              ? `${
                                  parseInt(time!.split(":")[0], 10) === 12
                                    ? 12
                                    : parseInt(time!.split(":")[0], 10) - 12
                                }:${time!.split(":")[1]} PM`
                              : `${time!} AM`}
                          </span>
                        </li>
                      </ul>
                      <ul className="booking-fee">
                        <li>
                          Consulting Fee <span>$100</span>
                        </li>
                        <li>
                          Booking Fee <span>$10</span>
                        </li>
                        <li>
                          Video Call <span>$50</span>
                        </li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">$160</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Booking Summary */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
