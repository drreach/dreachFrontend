import BookingSuccess from "@/components/BookingSuccess";
import React from "react";

type Props = {
  params: {
    username: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};
const page = (prop: Props) => {
  const {
    h_doctorName,
    h_apptDate,
    h_slotTime,
    v_doctorName,
    v_apptDate,
    v_slotTime,
  } = prop.searchParams;

  const allData = {
    h_doctorName: h_doctorName?.toString(),
    h_apptDate: h_apptDate?.toString(),
    h_slotTime: h_slotTime?.toString(),
    v_doctorName: v_doctorName?.toString(),
    v_apptDate: v_apptDate?.toString(),
    v_slotTime: v_slotTime?.toString(),
  };
  if (!h_doctorName || !h_apptDate || !h_slotTime) {
    return <h1>Invalid Access</h1>;
  }
  return (
    <div className="w-full min-h-screen">
      <div className="pt-28">
        <BookingSuccess data={allData} />
      </div>{" "}
    </div>
  );
};

export default page;
