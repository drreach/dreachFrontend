import { mapBloodGroup } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const Mypatients = ({
  data,
}: {
  data: {
    Fname: string;
    Lname: string;
    email: string;
    dob: string;
    contact: string;
    address: {
      address: String;
      city: String;
      state: String;
      country: String;
      pincode: String;
    };
    userId: string;
    bloodGroup: string;
    profilePic: string;
  };
}) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card widget-profile pat-widget-profile">
        <div className="card-body border  border-primary rounded-md">
          <div className="pro-widget-content">
            <div className="profile-info-widget">
              <a href="patient-profile.html" className="booking-doc-img">
                <img
                  src={`${
                    data.profilePic
                      ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.profilePic}`
                      : "/assets/doctors/doctor-thumb-02.jpg"
                  }`}
                  alt="User Image"
                />
              </a>
              <div className="profile-det-info">
                <h3>
                  <Link
                    href={`/patients/${data.userId}`}
                    className="font-bold no-underline"
                  >
                    {data.Fname} {data.Lname}
                  </Link>
                </h3>
                <div className="patient-details">
                  <h5 className="">
                    <b className="text-gray-800">Patient ID :</b>{" "}
                    <span className="text-black no-underline">
                      {data.userId}
                    </span>
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt" />{" "}
                    {data.address.address} {data.address.city}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-info">
            <ul>
              <li>
                Email <span>{data.email}</span>
              </li>
              <li>
                Phone <span>{data.contact ?? null}</span>
              </li>
              <li>
                Age <span>38 Years</span>
              </li>
              <li>
                Blood Group <span>({data.bloodGroup})</span>
              </li>
            </ul>
            <div className="flex justify-center items-center mt-3">
              <Link
                href={`/patients/${data.userId}`}
                className="btn btn-success items-center"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypatients;
