import ApplyDoctor from "@/components/buttons/ApplyDoctor";
import DoctorsProfileSettings from "@/components/doctor/dashboard/DoctorsProfileSettings";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session?.data?.id) return <div>Not Authorized</div>;
  const res = await fetch(
    `${process.env.SERVER_URL}/doctor/getDoctor/${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["ApplyDoctor"],
      },
    },
  );
  // console.log(res);

  if (res.status === 404) {
    return (
      <div>
        <ApplyDoctor />
      </div>
    );
  }
  return (
    <div>
      <DoctorsProfileSettings />
    </div>
  );
};

export default page;
