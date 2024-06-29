import HybridCheckout from "@/components/hybridCheckout";

import React from "react";
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async (props: Props) => {
  const {
    homeVisitDoctorId,
    h_apptDate,
    h_slotTime,
    videoDoctorId,
    v_apptDate,
    v_slotTime,
  } = props.searchParams;
  if (
    !homeVisitDoctorId ||
    !h_apptDate ||
    !h_slotTime ||
    !videoDoctorId ||
    !v_apptDate ||
    !v_slotTime
  )
    return;

  const h_apptDateOnly = h_apptDate.toString().substring(0, 10);
  const v_apptDateOnly = v_apptDate.toString().substring(0, 10);

  const res = await fetch(
    `${process.env.SERVER_URL}/doctor/hybridcheckDoctorAvailability`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeVisitDoctorId: homeVisitDoctorId,
        h_apptDate: h_apptDateOnly,
        h_slotTime: h_slotTime,
        videoDoctorId: videoDoctorId,
        v_apptDate: v_apptDateOnly,
        v_slotTime: v_slotTime,
      }),
    },
  );
  if (res.status !== 201) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  if (!data.isVideoDoctorAvailable || !data.isHomeVisitDoctorAvailable)
    return (
      <div className="pt-28 min-h-screen">
        <h1 className="text-[20px] text-center">
          Doctor Not Available at this Time
        </h1>
      </div>
    );

  return (
    <div className="pt-28 mx-2">
      <HybridCheckout
        data={data}
        h_date={h_apptDateOnly}
        h_time={h_slotTime.toString()}
        v_date={v_apptDateOnly}
        v_time={v_slotTime.toString()}
      />
    </div>
  );
};

export default page;
