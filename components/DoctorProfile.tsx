"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import {
  setActiveDotcorTab,
  setAppointmentDetails,
} from "@/Redux/reducers/UserReducers";
import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import Header from "./Header";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import WriteDoctorReview from "./WriteDoctorReview";

//get today and tomorrow
const getTodayAndTomorrow = () => {
  const date = new Date();
  const today = date.getDate();
  const tomorrow = today + 1;
  console.log(today, tomorrow);
  return {
    today,
    tomorrow,
  };
};

const convertDate = (date: string) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return {
    day,
    month,
    year,
  };
};

const mapDay = {
  0: "sun",
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
};

const numberToMonthMap = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const getToday = () => {
  const d = new Date();
  const day = d.getDay();
  // const d = d.getDay();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return {
    day,
    month,
    year,
  };
};

interface SheduleTime {
  start: string;
  end: string;
}

interface SheduleData {
  mon: SheduleTime[];
  tue: SheduleTime[];
  wed: SheduleTime[];
  thu: SheduleTime[];
  fri: SheduleTime[];
  sat: SheduleTime[];
}

type DoctorProfile = {
  id: string;
  username: string;
  Fname: string;
  Lname: string;
  email: string;
  age: number;
  gender: string;
  dob: string;

  bloodGroup: string;
  contact: string;
  role: string;
  userId: string;

  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };

  profilePic: string;

  doctorProfile: {
    specializations: string[];
    schedules: SheduleData;

    shedules: {};

    educations: {
      university: string;
      degree: string;
      duration: string;
    }[];
    workExperiences: {
      clinic: string;
      duration: string;
    }[];
    awards: {
      date: string;
      title: string;
      description: string;
    }[];
    id: string;
    userId: string;
    fee: number;
    experience: number;
    description: string;
    status: string;
    
  };
};

const DoctorProfile = ({
  data,
  slots,
  isBookedByCurrentUser,
  isDoctorAppointedEver,
  status,
}: {
  data: DoctorProfile;
  slots: {
    date: string;
    availableSlots: [];
    
  }[];
  isBookedByCurrentUser: boolean;
  status: string;
  isDoctorAppointedEver:boolean
}) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(
    (state) => state.userReducer.activeDoctorTab
  );

  const appointmentDetails = useAppSelector(
    (state) => state.userReducer.appointMentDetails
  );

  const handleOnClickTab = (index: number) => {
    dispatch(setActiveDotcorTab(index));
  };

  const session = useSession();

 
  return (
    <div className="main-wrapper pt-28  w-full md:px-10 mx-auto overflow-x-hidden">
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
                    Doctor Profile
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Doctor Profile</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          {/* Doctor Widget */}
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <img
                      src={`${
                        data.profilePic
                          ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.profilePic}`
                          : "/assets/doctor-2.jpg"
                      } `}
                      className="img-fluid"
                      alt="User Image"
                    />
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      {data?.Fname} {data?.Lname}
                    </h4>
                    <p className="doc-speciality">
                      {data?.doctorProfile?.specializations?.join(",")}
                    </p>
                    <p className="doc-department">
                      <img
                        src="/assets/specialities/specialities-05.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      Dentist
                    </p>
                    <div className="rating">
                      {/* <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" /> */}
                      <BsStarFill size={20} className="text-yellow-500" />
                      <BsStarFill size={20} className="text-yellow-500" />
                      <BsStarFill size={20} className="text-yellow-500" />
                      <BsStarFill size={20} className="text-yellow-500" />
                      <BsStarFill size={20} className="text-yellow-500" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">
                        (35)
                      </span>
                    </div>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-map-marker-alt" />{" "}
                        {data?.address?.address}, {data?.address?.city},{" "}
                        {data?.address?.state}, {data?.address?.country},{" "}
                        {data?.address?.pincode}
                        {/* <a href="javascript:void(0);">Get Directions</a> */}
                      </p>
                      {/* <ul className="clinic-gallery">
                      <li>
                        <a
                          href="assets/img/features/feature-01.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-01.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-02.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-02.jpg"
                            alt="Feature Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-03.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-03.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-04.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-04.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                    </ul> */}
                    </div>
                    {/* <div className="clinic-services">
                    <span>Dental Fillings</span>
                    <span>Teeth Whitneing</span>
                  </div> */}
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="clini-infos">
                    <ul>
                      {/* <li>
                      <i className="far fa-thumbs-up" /> 99%
                    </li> */}
                      <li>
                        <i className="far fa-comment" /> 35 Feedback
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" /> {data?.contact}
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" /> {data?.email}
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt" />{" "}
                        {data?.doctorProfile?.fee}
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-action">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-white fav-btn"
                    >
                      <i className="far fa-bookmark" />
                    </a>
                    <a href="chat.html" className="btn btn-white msg-btn">
                      <i className="far fa-comment-alt" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-white call-btn"
                      data-toggle="modal"
                      data-target="#voice_call"
                    >
                      <i className="fas fa-phone" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-white call-btn"
                      data-toggle="modal"
                      data-target="#video_call"
                    >
                      <i className="fas fa-video" />
                    </a>
                  </div>

                  <div className="my-3">
                    <Tabs>
                      <TabList>
                        {slots &&
                          slots.map((s, i) => {
                            return (
                              <Tab key={i}>
                                {i == 0
                                  ? "Today"
                                  : i == 1
                                  ? "Tomorrow"
                                  : `${
                                      numberToMonthMap[
                                        convertDate(s.date)
                                          .month as keyof typeof numberToMonthMap
                                      ]
                                    } ${convertDate(s.date).day}`}
                              </Tab>
                            );
                          })}
                      </TabList>
                      {slots.map((s, i) => {
                        return (
                          <TabPanel key={i}>
                            {/* <div className='grid grid-cols-10 gap-2'>
        {slots[i].availableSlots && slots[i].availableSlots.map((a,i)=>{
          return <span className='bg-red-500 rounded-md px-2 py-2'>{a}</span>
        })}
      </div> */}

                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2 mx-2">
                              {s.availableSlots.map((slot: string, index) => (
                                <div 
                                  onClick={() =>
                                    dispatch(
                                      setAppointmentDetails({
                                        time: slot,
                                        date: s.date,
                                        doctorId: data.doctorProfile.id,
                                      })
                                    )
                                  }
                                  className={`${
                                    s.date === appointmentDetails.date &&
                                    slot === appointmentDetails.time &&
                                    appointmentDetails.doctorId ===
                                      data.doctorProfile.id
                                      ? "bg-cyan-500"
                                      : "bg-green-500"
                                  } rounded-md items-center flex hover:bg-red-400 flex-row justify-around cursor-pointer text-white font-bold w-full`}
                                  key={index}
                                >
                                  <span>
                                    {parseInt(slot.split(":")[0], 10) >= 12
                                      ? `${
                                          parseInt(slot.split(":")[0], 10) ===
                                          12
                                            ? 12
                                            : parseInt(slot.split(":")[0], 10) -
                                              12
                                        }:${slot.split(":")[1]} PM`
                                      : `${slot} AM`}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </TabPanel>
                        );
                      })}
                    </Tabs>
                  </div>

                  <div className="clinic-booking">
                    {!session?.data ?  <Link className="apt-btn no-underline" href="/auth/login">
                        Login to Book Appointmment
                      </Link> : isBookedByCurrentUser ? (
                      <Link className="apt-btn no-underline" href="#">
                        Status : {status}
                      </Link>
                    ) : appointmentDetails.doctorId.length > 0 ? (
                      <Link
                        className="apt-btn no-underline"
                        href={`/checkout?doctorId=${appointmentDetails.doctorId}&time=${appointmentDetails.time}&date=${appointmentDetails.date}`}
                      >
                        Book Appointment
                      </Link>
                    ) : (
                      <Link href="#" className="apt-btn no-underline">
                        Select Appointment
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Doctor Widget */}
          {/* Doctor Details Tab */}
          <div className="card">
            <div className="card-body pt-0">
              {/* Tab Menu */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li onClick={() => handleOnClickTab(0)} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === 0 && "active"}`}
                      href="#doc_overview"
                      data-toggle="tab"
                    >
                      Overview
                    </a>
                  </li>
                  <li onClick={() => handleOnClickTab(1)} className="nav-item ">
                    <a
                      className={`nav-link ${activeTab === 1 && "active"}`}
                      href="#doc_locations"
                      data-toggle="tab"
                    >
                      Locations
                    </a>
                  </li>
                  <li onClick={() => handleOnClickTab(2)} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === 2 && "active"}`}
                      href="#doc_reviews"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  <li onClick={() => handleOnClickTab(3)} className="nav-item">
                    <a
                      className={`nav-link  ${activeTab === 3 && "active"} `}
                      href="#doc_business_hours"
                      data-toggle="tab"
                    >
                      Business Hours
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /Tab Menu */}
              {/* Tab Content */}
              <div className="tab-content pt-0">
                {/* Overview Content */}
                <div
                  role="tabpanel"
                  id="doc_overview"
                  className={`tab-pane fade  ${
                    activeTab === 0 && "show active"
                  }`}
                >
                  <div className="row">
                    <div className="col-md-12 col-lg-9">
                      {/* About Details */}
                      <div className="widget about-widget">
                        <h4 className="widget-title">About Me</h4>
                        <p>{data?.doctorProfile?.description}</p>
                      </div>
                      {/* /About Details */}
                      {/* Education Details */}
                      <div className="widget education-widget">
                        <h4 className="widget-title">Education</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            {data?.doctorProfile?.educations?.map(
                              (edu, index) => {
                                return (
                                  <li key={index}>
                                    <div className="experience-user">
                                      <div className="before-circle" />
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          {edu.university}
                                        </a>
                                        <div>{edu.degree}</div>
                                        <span className="time">
                                          {edu.duration}
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                      {/* /Education Details */}
                      {/* Experience Details */}
                      <div className="widget experience-widget">
                        <h4 className="widget-title">Work &amp; Experience</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            {data?.doctorProfile?.workExperiences?.map(
                              (work, index) => {
                                return (
                                  <li key={index}>
                                    <div className="experience-user">
                                      <div className="before-circle" />
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          {work.clinic}
                                        </a>
                                        <span className="time">
                                          {work.duration}
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                      {/* /Experience Details */}
                      {/* Awards Details */}
                      {data.doctorProfile.awards.length > 0 && (
                        <div className="widget awards-widget">
                          <h4 className="widget-title">Awards</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              {data?.doctorProfile?.awards?.map(
                                (award, index) => {
                                  return (
                                    <li key={index}>
                                      <div className="experience-user">
                                        <div className="before-circle" />
                                      </div>
                                      <div className="experience-content">
                                        <div className="timeline-content">
                                          <p className="exp-year">July 2019</p>
                                          <h4 className="exp-title">
                                            Humanitarian Award
                                          </h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Proin a
                                            ipsum tellus. Interdum et malesuada
                                            fames ac ante ipsum primis in
                                            faucibus.
                                          </p>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                      {/* /Awards Details */}
                      {/* Services List */}

                      {/* /Services List */}
                      {/* Specializations List */}
                      <div className="service-list">
                        <h4>Specializations</h4>
                        <ul className="clearfix">
                          {data?.doctorProfile?.specializations?.map(
                            (spec, index) => {
                              return <li key={index}>{spec}</li>;
                            }
                          )}
                        </ul>
                      </div>
                      {/* /Specializations List */}
                    </div>
                  </div>
                </div>
                {/* /Overview Content */}
                {/* Locations Content */}
                <div
                  role=""
                  id="doc_locations"
                  className={`tab-pane fade  ${
                    activeTab === 1 && "show active"
                  }`}
                >
                  {/* Location List */}
                  <div className="location-list active">
                    <div className="row">
                      {/* Clinic Content */}
                      <div className="col-md-6">
                        <div className="clinic-content">
                          <h4 className="clinic-name">
                            <a href="#">Smile Cute Dental Care Center</a>
                          </h4>
                          <p className="doc-speciality">
                            MDS - Periodontology and Oral Implantology, BDS
                          </p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">
                              (4)
                            </span>
                          </div>
                          <div className="clinic-details mb-0">
                            <h5 className="clinic-direction">
                              {" "}
                              <i className="fas fa-map-marker-alt" /> 2286
                              Sundown Lane, Austin, Texas 78749, USA <br />
                              <a href="javascript:void(0);">Get Directions</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      {/* /Clinic Content */}
                    </div>
                  </div>
                  {/* /Location List */}
                </div>
                {/* /Locations Content */}
                {/* Reviews Content */}
                <div
                  role="tabpanel"
                  id="doc_reviews"
                  className={`tab-pane fade  ${
                    activeTab === 2 && "show active"
                  }`}
                >
                  {/* Review Listing */}
                  <div className="widget review-listing">
                    <ul className="comments-list">
                      {/* Comment List */}
                      <li>
                        <div className="comment">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            alt="User Image"
                            src={`${
                              data.profilePic
                                ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.profilePic}`
                                : "/assets/doctor-2.jpg"
                            } `}
                          />

                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Richard Wilson
                              </span>
                              <span className="comment-date">
                                Reviewed 2 Days ago
                              </span>
                              <div className="review-count rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p className="recommended">
                              <i className="far fa-thumbs-up" /> I recommend the
                              doctor
                            </p>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation. Curabitur non
                              nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                              <p className="recommend-btn">
                                <span>Recommend?</span>
                                <a href="#" className="like-btn">
                                  <i className="far fa-thumbs-up" /> Yes
                                </a>
                                <a href="#" className="dislike-btn">
                                  <i className="far fa-thumbs-down" /> No
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* /Comment List */}
                    </ul>
                    {/* Show All */}
                    <div className="all-feedback text-center">
                      <a href="#" className="btn btn-primary btn-sm">
                        Show all feedback <strong>(167)</strong>
                      </a>
                    </div>
                    {/* /Show All */}
                  </div>
                  {/* /Review Listing */}
                  {/* Write Review */}
                  <div className={`write-review ${!isDoctorAppointedEver && "hidden"}`}>
                    <h4>
                      Write a review for <strong>Dr. Darren Elder</strong>
                    </h4>
                    {/* Write Review Form */}
                  <WriteDoctorReview  doctorProfileId={data.doctorProfile.id} />
                    {/* /Write Review Form */}
                  </div>
                  {/* /Write Review */}
                </div>
                {/* /Reviews Content */}
                {/* Business Hours Content */}
                <div
                  role="tabpanel"
                  id="doc_business_hours"
                  className={`tab-pane fade  ${
                    activeTab === 3 && "show active"
                  }`}
                >
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      {/* Business Hours Widget */}
                      <div className="widget business-widget">
                        <div className="widget-content">
                          <div className="listing-hours">
                            <div className="listing-day current">
                              <div className="day">
                                Today{" "}
                                <span>
                                  {
                                    mapDay[
                                      getToday().day as keyof typeof mapDay
                                    ]
                                  }
                                </span>
                              </div>
                              <div className="time-items">
                                <span className="open-status">
                                  <span className="badge bg-success-light">
                                    Open Now
                                  </span>
                                </span>
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>

                            {data &&
                              data.doctorProfile.shedules &&
                              Object.keys(data.doctorProfile.schedules).map(
                                (key, index) => {
                                  return (
                                    <div key={index} className="listing-day border-b border-gray-200 py-2">
                                      <div className="day">
                                        {key.at(0)?.toUpperCase()}
                                        {key.slice(1)}
                                      </div>
                                      <span className="time-items flex flex-col">
                                        <span className="flex flex-row">
                                          <div className="flex flex-col gap-1">
                                            {data?.doctorProfile?.schedules[
                                              (key as "mon") ||
                                                "tue" ||
                                                "web" ||
                                                "thur" ||
                                                "fri" ||
                                                "sat"
                                            ].map((time, index) => {
                                              return (
                                                <span key={index}>
                                                  {time.start} - {time.end}
                                                </span>
                                              );
                                            })}
                                          </div>
                                        </span>
                                      </span>
                                    </div>
                                  );
                                }
                              )}
                          </div>
                        </div>
                      </div>
                      {/* /Business Hours Widget */}
                    </div>
                  </div>
                </div>
                {/* /Business Hours Content */}
              </div>
            </div>
          </div>
          {/* /Doctor Details Tab */}
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default DoctorProfile;
