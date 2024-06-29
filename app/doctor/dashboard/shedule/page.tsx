import Shedule from "@/components/doctor/dashboard/Shedule";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);

  if (!session || !session?.data?.doctorProfile?.id)
    return <div>Not Authorized</div>;

  const res = await fetch(
    `${process.env.SERVER_URL}/doctor/getShedules/${session?.data.doctorProfile.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    },
  );

  if (res.status !== 200) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();

  return (
    <Shedule
      HomeShedules={data.doctorProfile.schedules.HomeShedule}
      DeskShedules={data.doctorProfile.schedules.DeskShedule}
      mode={data.doctorProfile.mode}
      isAvailableForDesk={data.doctorProfile.isAvailableForDesk}
      OnlineShedule={data.doctorProfile.schedules.OnlineShedule}
    />
  );
};

export default page;
