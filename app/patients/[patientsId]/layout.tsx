import DashHeader from "@/components/DashHeader";
import AppointmentUserTable from "@/components/User/AppointmentUserTable";
import MedicalTab from "@/components/User/dashboard/MedicalTab";
import MedicalTable from "@/components/User/dashboard/MedicalTable";
import Sidebar from "@/components/doctor/dashboard/Sidebar";
import Prescription from "@/components/patients/Prescription";
import Tabs from "@/components/patients/Tabs";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { calculateAge, mapBloodGroup } from "@/utils/utils";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

// data:{
//     doctorProfile: {
//       user: { Fname: string, Lname: string, profilePic: string|null },
//       specializations: string[],
//       fee: null|number
//     },
//     appointmentSlotDate: string,
//     appointmentSlotTime: string,
//     createdAt:string,
//     isForOthers: boolean,
//     status: string
//   }

const data = [
  {
    doctorProfile: {
      user: {
        Fname: "Dr. Ruby",
        Lname: "Perrin",
        profilePic: "/assets/img/doctors/doctor-thumb-01.jpg",
      },
      specializations: ["Dental"],
      fee: 200,
    },
    appointmentSlotDate: "14 Nov 2019",
    appointmentSlotTime: "5.00 PM",
    createdAt: "12 Nov 2019",
    isForOthers: false,
    status: "APPROVED",
  },
  {
    doctorProfile: {
      user: {
        Fname: "Dr. Darren",
        Lname: "Elder",
        profilePic: "/assets/img/doctors/doctor-thumb-02.jpg",
      },
      specializations: ["Dental"],
      fee: 200,
    },
    appointmentSlotDate: "12 Nov 2019",
    appointmentSlotTime: "11.00 AM",
    createdAt: "10 Nov 2019",
    isForOthers: false,
    status: "REJECT",
  },
];

const medidata = [
  {
    id: "#AP977",
    date: "16 Nov 2019",
    description: "Appointment Booking",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Ruby Perrin",
      image: "/assets/doctor-1.jpg",
      specialization: "MBBS, MD",
    },
  },
  {
    id: "#AP974",
    date: "16 Nov 2022",
    description: "Teeth Cleaning",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Rohan Karn",
      image: "/assets/doctor-2.jpg",
      specialization: "MBBS, MD",
    },
  },

  {
    id: "#AP933",
    date: "16 Nov 2021",
    description: "Mouth Cleaning",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Aniket Karn",
      image: "/assets/doctor-3.jpg",
      specialization: "MBBS, MD",
    },
  },
];

export interface Data {
  Fname: string;
  Lname: string;
  address: Address;
  bloodGroup: any;
  contact: string;
  dob: string;
  email: string;
  profilePic: any;
  userId: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { patientsId: string };
}) {
  //   const session = await getServerSession(authOption);
  //   if (!session || session.data.role !== "DOCTOR") {
  //     return redirect("/");
  //   }

  const response = await fetch(
    `${process.env.SERVER_URL}/doctor/getPatientsInfo?pid=${params.patientsId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //
      },
      cache: "no-cache",
    },
  );

  const data: Data = await response.json();

  return (
    <div className=" main-wrapper pt-28 md:px-10 overflow-x-hidden">
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
                          src={`${
                            data?.profilePic
                              ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.profilePic}`
                              : "/assets/doctors/doctor-thumb-02.jpg"
                          }`}
                          alt="User Image"
                          width={50}
                          height={50}
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>
                          {data?.Fname} {data?.Lname}
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <b>Patient ID :</b> {data?.userId}
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" />{" "}
                            {data?.address?.address} {data?.address?.city}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="patient-info">
                    <ul>
                      <li>
                        Phone <span>{data?.contact}</span>
                      </li>
                      <li>
                        Age <span>{calculateAge(data?.dob)} Years</span>
                      </li>
                      <li>
                        Blood Group{" "}
                        <span>
                          {
                            mapBloodGroup[
                              data?.bloodGroup as keyof typeof mapBloodGroup
                            ]
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Profile Widget */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="user-tabs">
                    <Tabs patientsId={params.patientsId} />
                  </div>
                  <div className="tab-content">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
