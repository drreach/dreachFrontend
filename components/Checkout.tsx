"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setAptFor, setCurrentLocation } from "@/Redux/reducers/UserReducers";
import { doctorAppointment } from "@/ServerActions/Doctor/doctor";
import { convertDateToFormat } from "@/utils/utils";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Data {
  doctor: {
    schedules: {
      id: string;
      doctorProfileId: string;
      OnlineShedule: string[];
      DeskShedule: [];

    };
    fee: number | null;
    id:string
    mode: string;
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
}: {
  data: Data;
  time?: string;
  date?: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const session = useSession();



  const apptFor = useAppSelector((state) => state.userReducer.apptFor);
  const dispatch = useAppDispatch();

  const location = useAppSelector(state=>state.userReducer.currentLocation)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        //   dispatch(setCurrentLocation(position.coords.latitude));
          dispatch(setCurrentLocation({lat:position.coords.latitude,long:position.coords.longitude}));
          console.log(position.coords);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const submit = async(formData:any)=>{
    console.log({...formData,...location});
    if(!session || !session.data) return alert("session Required");

  if(location.lat===0.00 || location.long===0) return alert("Location Required");

    const res = await doctorAppointment(data.doctor.id,formData,session.data?.user.id,date!,time!,location.lat,location.long,apptFor==="OTHER")
    console.log(res);
  }

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
                    <a href="index-2.html">Home</a>
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
                            <label>Book For</label>
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
                              <option value="ME">ME</option>
                              <option value="OTHER">OTHER</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>First Name</label>
                            <input
                              {...register("Fname",{required:apptFor==="OTHER"})}
                              disabled={apptFor==="ME"}
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
                            <label>Last Name</label>
                            <input
                            disabled={apptFor==="ME"}
                              {...register("Lname", { required: apptFor==="OTHER" })}
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
                            <label>Email</label>
                            <input
                            disabled={apptFor==="ME"}
                              {...register("email", { required: apptFor==="OTHER" })}
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
                            <label>Phone</label>
                            <input
                              {...register("contact",{ required: apptFor==="OTHER" })}
                              className="form-control"
                              type="text"
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
                        </div>{" "}
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Longitude</label>
                            <input
                            
                              className="form-control"
                              defaultValue={location.long}
                              value={location.long}
                              type="number"
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
                        
                        <button className="btn btn-primary" type="button" onClick={() => getLocation()}>
                          Get Current Location
                        </button>
                      </div>
                    </div>
                    {/* /Personal Information */}

                    <button type="submit" className="btn btn-success">Submit</button>
               
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
                      {/* <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">35</span>
                    </div> */}
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
