"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import FilterDoctors from "./FilterDoctors";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setDoctorList } from "@/Redux/reducers/UserReducers";
import Loader from "@/components/Loader";

interface FindDoctorList {
  specializations: string[];

  id: string;
  fee: number;
  mode: string;
  isAvailableForDesk: boolean;

  user: {
    id: string;

    Fname: string;
    Lname: string;
    email: string;
    profilePic: string;
    contact: string;
    username: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
  };
}

const FindDoctors = ({ data }: { data: FindDoctorList[] }) => {
  const dispatch = useAppDispatch();
  const isFindingDoctor = useAppSelector(
    (state) => state.userReducer.findingDoctor
  );
  const doctorList = useAppSelector((state) => state.userReducer.doctorList);

  useEffect(() => {
    if (data && !isFindingDoctor && doctorList.length === 0) {
      dispatch(setDoctorList(data));
    }
  }, [data]);

  return (
    <div className="row row-grid">
      <FilterDoctors />
      {isFindingDoctor ? (
        <Loader />
      ) : (
        doctorList &&
        doctorList.map((d, v) => {
          return (
            <div key={v} className="col-md-6 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div className="doc-img">
                  <Link href={`/doctorprofile/${d.user.username}`}>
                    <img
                      className="h-[200px] object-contain"
                      alt="User Image"
                      src={`${
                        d.user.profilePic
                          ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`
                          : "/assets/doctor-2.jpg"
                      } `}
                    />
                  </Link>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <Link href={`/doctorprofile/${d.user.username}`}>
                      {d?.user?.Fname} {d?.user?.Lname}
                    </Link>
                    <i className="fas fa-check-circle verified" />
                  </h3>

                  <p className=" text-[12px]">{d.specializations.join(",")}</p>
                  <div className="rating">
                    <BsStarFill className="text-yellow-500" size={20} />
                    <BsStarFill className="text-yellow-500" size={20} />
                    <BsStarFill className="text-yellow-500" size={20} />
                    <BsStarFill className="text-yellow-500" size={20} />
                    <BsStarFill className="text-yellow-500" size={20} />

                    <span className="d-inline-block average-rating">(17)</span>
                  </div>
                  <ul className="available-info mt-0">
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      {d.user?.address?.city} {d?.user?.address?.state}
                    </li>

                    <li>
                      <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                      <i
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      />
                    </li>
                  </ul>
                  <div className="w-full  flex gap-2 flex-col">
                    <Link
                      href={`/doctorprofile/${d.user.username}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={`/doctorprofile/${d.user.username}?single_mode=${d.mode}`}
                      type="button"
                      className="w-full btn btn-secondary"
                    >
                      Book {d?.mode}
                    </Link>

                    {d?.isAvailableForDesk && (
                      <Link
                        href={`/doctorprofile/${d.user.username}?single_mode=CLINIC_VISIT`}
                        type="button"
                        className="btn btn-success btn-sm"
                      >
                        Book CLINIC_VISIT
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FindDoctors;
