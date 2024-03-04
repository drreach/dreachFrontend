import Appointment from "@/components/Admin/dashboard/Appointment";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/user/getAppointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer "+localStorage.getItem("token")
    },
    cache: "no-cache",
  });

  if(res.status!==200){
    throw new Error("Something went wrong!");
}
  const data = await res.json();
  return <Appointment data={data} />;
};

export default page;
