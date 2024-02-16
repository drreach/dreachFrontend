"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { validateRoutes } from "@/ServerActions";
import { ActionOnPatientsAppointment } from "@/ServerActions/Doctor/doctor";
import MapTimes from "@/components/MapTimes";
import { convertDateToFormat, loadToast, updateToast } from "@/utils/utils";
import { useSession } from "next-auth/react";
import React from "react";
import { toast } from "react-toastify";

const AppointmentCard = ({
  data,
  upcoming,
}: {
  data: {
    user: {
      Fname: string;
      Lname: string;
      contact: string;
      profilePic: string | null;
      userId: string;
      id: string;
    };
    isForOthers: boolean;
    othersContact: string | null;
    appointmentSlotTime: string;
    appointmentSlotDate: string;
    reason: string;
    id: string;
    status: string;
    doctorProfileId: string;
    userId: string;
  };
  upcoming: boolean;
}) => {
  const session = useSession();
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a href="patient-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={
                data?.user?.profilePic
                  ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data?.user?.profilePic}`
                  : "/assets/doctor-1.jpg"
              }
              alt="User Image"
            />
          </a>
          <a href="patient-profile.html">
            {data?.user?.Fname}
            {data?.user?.Lname} <span>{data?.user?.userId}</span>
          </a>
        </h2>
      </td>
      <td>
        {upcoming ? convertDateToFormat(data?.appointmentSlotDate) : "Today"}
        <span className="d-block text-info">
          {<MapTimes slot={data?.appointmentSlotTime} />}
        </span>
      </td>
      <td>{data?.user.contact}</td>
      <td>
        <p className="text-wrap">{data?.reason} </p>
      </td>
      <td className="text-center">Rs.1000</td>
      <td className="text-right">
        <div className="table-action flex gap-2">
          {data?.status === "APPROVED" ? (
            <a href="#" className="btn btn-sm bg-success text-white">
              <i className="far fa-eye" /> Accepted
            </a>
          ) : data?.status === "REJECT" ? (
            <a href="#" className="btn btn-sm bg-danger text-white ">
              <i className="far fa-eye" /> Rejected
            </a>
          ) : (
            <>
              {/* <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
        <i className="far fa-eye" /> View
      </a> */}
              <a
                href="#"
                onClick={async () => {
                  if (!session || !session?.data?.data)
                    return toast.error("Session Expired,Refresh the page");
                  const toastId = loadToast("Please Wait,Accepting Doctor");
                  const res = await ActionOnPatientsAppointment(
                    data?.user?.id,
                    "APPROVED",
                    data?.id
                  );
                  if (res === 201) {
                    return updateToast(toastId, "Doctor Accepted", "success");
                  }
                  return updateToast(
                    toastId,
                    "Failed to Accept Doctor",
                    "error"
                  );
                }}
                className="btn btn-sm bg-success-light"
              >
                <i className="fas fa-check" /> Accept
              </a>
              <a
                onClick={async () => {
                  if (!session || !session?.data?.data)
                    return toast.error("Session Expired,Refresh the page");
                  const toastId = loadToast("Please Wait,rejecting Doctor");
                  const res = await ActionOnPatientsAppointment(
                    data?.user?.id,
                    "REJECT",
                    data?.id
                  );
                  if (res === 201) {
                    return updateToast(toastId, "Doctor rejected", "success");
                  }
                  return updateToast(
                    toastId,
                    "Failed to reject Doctor",
                    "error"
                  );
                }}
                href="#"
                className="btn btn-sm bg-danger-light"
              >
                <i className="fas fa-times" /> Reject
              </a>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default AppointmentCard;
