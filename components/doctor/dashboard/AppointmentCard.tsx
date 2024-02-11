"use client"
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { ActionOnPatientsAppointment } from "@/ServerActions/Doctor/doctor";
import { convertDateToFormat } from "@/utils/utils";
import React from "react";

const AppointmentCard = ({
  data,
  upcoming
}: {
  data: {
    user: {
      Fname: string;
      Lname: string;
      contact: string;
      profilePic: string | null;
      userId: string;
      id:string
    };
    isForOthers: boolean;
    othersContact: string | null;
    appointmentSlotTime: string;
    appointmentSlotDate:string
    id: string;
    status:string
    doctorProfileId: string;
    userId: string;
  };
  upcoming:boolean
}) => {

  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a href="patient-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={data.user.profilePic ?? "/assets/doctor-1.jpg"}
              alt="User Image"
            />
          </a>
          <a href="patient-profile.html">
            {data.user.Fname}
            {data.user.Lname} <span>{data.user.userId}</span>
          </a>
        </h2>
      </td>
      <td>
        {upcoming?convertDateToFormat(data.appointmentSlotDate):"Today"}
        <span className="d-block text-info">{data.appointmentSlotTime}</span>
      </td>
      <td>{data.user.contact}</td>
      <td>{data.isForOthers ? "Other" : "Self"}</td>
      <td className="text-center">Rs.1000</td>
      <td className="text-right">
      <div className="table-action flex gap-2">
        {data.status==="APPROVED"?
         <a href="#" className="btn btn-sm bg-success text-white">
         <i className="far fa-eye" /> Accepted
       </a>
      :data.status==="REJECT"? 
      <a href="#" className="btn btn-sm bg-danger text-white ">
      <i className="far fa-eye" /> Rejected
    </a>
      :<>
      <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
        <i className="far fa-eye" /> View
      </a>
      <a href="#" onClick={async()=>{
        const res = await ActionOnPatientsAppointment(data.user.id,"APPROVED",data.id)
      }} className="btn btn-sm bg-success-light">
        <i className="fas fa-check" /> Accept
      </a>
      <a onClick={async()=>{
        const res = await ActionOnPatientsAppointment(data.user.id,"REJECT",data.id)
      }} href="#" className="btn btn-sm bg-danger-light">
        <i className="fas fa-times" /> Reject
      </a>
        </>
      }
      </div>
      </td>
    </tr>
  );
};

export default AppointmentCard;
