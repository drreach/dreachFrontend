import AppointnmnetTab from "@/components/User/dashboard/AppointnmnetTab";
import Tab from "@/components/User/dashboard/Tab";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session?.data?.id) return <div>Not Authorized</div>;
  const res = await fetch(
    `${process.env.SERVER_URL}/user/getAppointments/${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  if (res.status !== 200) {
    throw new Error("Something went wrong!");
  }
  const d = await res.json();

  return (
    <>
      <Tab title="Appointment" />
      <AppointnmnetTab data={d} />
    </>
  );
};

export default page;
