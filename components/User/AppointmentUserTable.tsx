import { convertDateToFormat } from "@/utils/utils";
import React from "react";



const status = {
    "PENDING":"badge-warning",
    "COMPLETED":"badge-success",
    "REJECT":"badge-danger",
    "APPROVED":"badge-primary"
}

const AppointmentUserTable = ({data}:{
    data:{
      doctorProfile: {
        user: { Fname: string, Lname: string, profilePic: string|null },
        specializations: string[],
        fee: null|number
      },
      appointmentSlotDate: string,
      appointmentSlotTime: string,
      createdAt:string,
      isForOthers: boolean,
      status: string
    }
}) => {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={`${data.doctorProfile.user.profilePic??"/assets/doctor-1.jpg"}`}
              alt="User Image"
            />
          </a>
          <a className="no-underline" href="doctor-profile.html ">
           {data.doctorProfile.user.Fname} {data.doctorProfile.user.Lname} <span>{data.doctorProfile.specializations.join(",")}</span>
          </a>
        </h2>
      </td>
      <td>
        {convertDateToFormat(data.appointmentSlotDate)} <span className="d-block text-info">{data.appointmentSlotTime}</span>
      </td>
      <td>{convertDateToFormat(data.createdAt)}</td>
      <td>$2000</td>
      <td>{data.isForOthers?"Other":"Self"}</td>
      <td>
        <span className={`badge badge-pill ${status[data.status as keyof typeof status] }`}>{data.status}</span>
      </td>
      {/* <td className="text-right">
        <div className="table-action">
          <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
            <i className="fas fa-print" /> Print
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
            <i className="far fa-eye" /> View
          </a>
        </div>
      </td> */}
    </tr>
  );
};

export default AppointmentUserTable;
