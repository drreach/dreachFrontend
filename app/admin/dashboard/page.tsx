import AdminDashboard from "@/components/Admin/dashboard/AdminDashboard";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/user/getUnverifiedDoctors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer "+localStorage.getItem("token")
    },
    cache: "no-cache",
    next: {
      tags: ["doctor_verify"],
    },
  });

  if(res.status!==200){
    throw new Error("Something went wrong!");
}
  const data = await res.json();
  return (
    <AdminDashboard
      DoctorsNo={data.DoctorList}
      patientsNo={data.patientsList}
      data={data.doctors}
    />
  );
};

export default page;
