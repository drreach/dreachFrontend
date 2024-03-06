import DoctorProfile from "@/components/DoctorProfile";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {
  params: {
    username: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async (props: Props) => {
  const session = await getServerSession(authOption);
  const today = new Date();
  const {
    homeVisitDoctorId,
    h_apptDate,
    h_slotTime,
    mode,
    single_mode,
  } = props.searchParams;

  if (mode && mode === "video") {

    if (!homeVisitDoctorId || !h_apptDate || !h_slotTime)
      throw new Error("Invalid Access");
    const url =
      mode === "video"
        ? `&homeVisitDoctorId=${homeVisitDoctorId}&h_apptDate=${h_apptDate}&h_slotTime=${h_slotTime}`
        : undefined;
    const dateOnly = h_apptDate.toString().substring(0, 10);

    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/getdoctorProfilebyVideo?username=${props.params.username}&userId=${session?.data?.id}&slectedDateByClient=${dateOnly}&slot=${h_slotTime}&clientCurrentTimezone=${today}&`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache",
      }
    );

    const data = await res.json();
    console.log(data);
    return (
      <DoctorProfile
        singleMode={undefined}
        availableSlots={data.availableSlots}
        h_date={h_apptDate?.toString()}
        h_time={h_apptDate?.toString()}
        url={url}
        urlMode={mode ? mode.toString() : undefined}
        isDoctorAppointedEver={data.isDoctorAppointedEver}
        isBookedByCurrentUser={data.isBookedByCurrentUser}
        status={data.status}
        slots={[]}
        data={data.doctor}
      />
    );
  }

  if (mode === "homevisit") {
    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/getdoctorProfilebyHome?username=${props.params.username}&clientCurrentTimezone=${today}&userId=${session?.data?.id}`,
      {
        method: "GET",
 
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache",
      }
    );

    // console.log(res);
    const data = await res.json();
    console.log(data);

    if (res.status !== 200) {
      return (
        <div className="pt-28 min-h-screen text-center">
          Either Doctor Not Found or you do not have permission to view the
          profile.
        </div>
      );
    }
    console.log(data);

    return (
      // <></>
      <DoctorProfile
        singleMode={undefined}
        h_date={h_apptDate?.toString()}
        h_time={h_apptDate?.toString()}
        url={undefined}
        urlMode={mode ? mode.toString() : undefined}
        isDoctorAppointedEver={data.isDoctorAppointedEver}
        isBookedByCurrentUser={data.isBookedByCurrentUser}
        status={data.status}
        slots={data.slotDetails}
        data={data.doctor}
      />
    );
  }

 
  console.log(today);

  const res = await fetch(

    `${process.env.SERVER_URL}/doctor/getDoctorProfile?username=${props.params.username}&userId=${session?.data?.id}&clientCurrentTimezone=${today}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "+localStorage.getItem("token")
      },
      cache: "no-cache",
    }
  );

  console.log(res);

  if (res.status !== 200) {
    console.log("heehhhh",res)
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  console.log(data);

  if (res.status !== 200) {
    return (
      <div className="pt-28 min-h-screen text-center">
        Either Doctor Not Found or you do not have permission to view the
        profile.
      </div>
    );
  }
  console.log(data);

  return (
    // <></>
    <DoctorProfile
      singleMode={single_mode?.toString()}
      h_date={h_apptDate?.toString()}
      h_time={h_apptDate?.toString()}
      url={undefined}
      urlMode={mode ? mode.toString() : undefined}
      isDoctorAppointedEver={data.isDoctorAppointedEver}
      isBookedByCurrentUser={data.isBookedByCurrentUser}
      status={data.status}
      slots={data.slotDetails}
      data={data.doctor}
    />
  );

  // return <div className="pt-28 min-h-screen text-center">Invalid Access</div>;
};

export default page;
