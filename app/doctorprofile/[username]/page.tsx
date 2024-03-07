import DoctorProfile from "@/components/DoctorProfile";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
// const { DateTime } = require('luxon');

const { DateTime } = require('luxon');
import moment from "moment";


type Props = {
  params: {
    username: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async (props: Props) => {
  const session = await getServerSession(authOption);
  const today = new Date();

  const nowInKolkata = DateTime.now().setZone('Asia/Kolkata');

  const currentDateInServerTimeZone = new Date();

  // Calculate the time difference between the server's local time zone and the Indian Standard Time zone (IST)
  const istOffsetMilliseconds = 5.5 * 60 * 60 * 1000; // IST is 5 hours and 30 minutes ahead of UTC
  
  // Adjust the time to reflect the Indian Standard Time zone (IST)

  const t = `${currentDateInServerTimeZone.getTime()+istOffsetMilliseconds}`;
  const s = new Date(currentDateInServerTimeZone.getTime() + istOffsetMilliseconds);
  
  console.log(s); // Out

// Convert Luxon DateTime object to JavaScript Date object in UTC mode
// const t = nowInKolkata.toUTC().toJSDate();

// Get the current date and time in the 'Asia/Kolkata' time zone
const currentDateInIndia = DateTime.now().setZone('Asia/Kolkata').toJSDate();

console.log(currentDateInIndia); 

  

 
    console.log(new Date(moment().utcOffset("+05:30").toLocaleString())
    );


//   const t = now.toISO();
//   const f =  t.split(' ')[0];
//   const c = new Date(f);
// const formattedDateString = c;

// console.log(formattedDateString)


// console.log(formattedDateString,today,new Date(today));
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
      `${process.env.SERVER_URL}/doctor/getdoctorProfilebyVideo?username=${props.params.username}&userId=${session?.data?.id}&slectedDateByClient=${dateOnly}&slot=${h_slotTime}&clientCurrentTimezone=${t}&`,
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
      `${process.env.SERVER_URL}/doctor/getdoctorProfilebyHome?username=${props.params.username}&clientCurrentTimezone=${t}&userId=${session?.data?.id}`,
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
  // console.log(today.toLocaleString("en-IN",{
  //   timeZone: "Asia/Kolkata"
  
  // }))
  const res = await fetch(

    `${process.env.SERVER_URL}/doctor/getDoctorProfile?username=${props.params.username}&userId=${session?.data?.id}&clientCurrentTimezone=${t}`,
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
