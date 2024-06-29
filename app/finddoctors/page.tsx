import FindDoctors from "@/components/User/dashboard/FindDoctors";
import React from "react";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async (props: Props) => {
  const { mode } = props.searchParams;
  if (!mode) throw new Error("Invalid Requests");
  const res = await fetch(
    `${process.env.SERVER_URL}/user/findDoctorList?address=NONE&speciality=NONE&mode=${mode}`,
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
  return (
    <div className="w-full flex justify-center pt-28 min-h-screen">
      <div className="max-w-screen-lg w-full">
        <FindDoctors mode={mode.toString()} data={data} />;
      </div>
    </div>
  );
};

export default page;
