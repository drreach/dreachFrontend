import FindDoctors from "@/components/User/dashboard/FindDoctors";
import React from "react";

const page = async () => {
  const res = await fetch(
    `${process.env.SERVER_URL}/user/findDoctorList?address=NONE&speciality=NONE`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "+localStorage.getItem("token")
      },
      cache: "no-cache",
    },
  );

  if (res.status !== 200) {
    throw new Error("Internal Server Error!");
  }
  const data = await res.json();
  return <FindDoctors mode={null} data={data} />;
};

export default page;
