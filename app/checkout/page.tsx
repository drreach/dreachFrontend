import Checkout from "@/components/Checkout";
import { format } from "date-fns";
import { parse, parseISO } from "date-fns";
import { formatISO } from "date-fns";
import React from "react";
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async (props: Props) => {
  const { doctorId, time, date, mode } = props.searchParams;
  if (!date || !time || !doctorId || !mode) return;
  const dateOnly = date.toString().substring(0, 10);
  const res = await fetch(
    `${process.env.SERVER_URL}/doctor/checkDoctorAvailability`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        doctorId: doctorId,
        date: dateOnly,
        slot: time,
        mode: mode,
      }),
    },
  );
  if (res.status !== 201) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  if (!data.isAvailable)
    return (
      <div className="pt-28 min-h-screen">
        <h1 className="text-[20px] text-center">
          Doctor Not Available at this Time
        </h1>
      </div>
    );

  return (
    <div className="pt-28 mx-2">
      <Checkout
        mode={mode.toString()}
        data={data}
        date={dateOnly}
        time={time.toString()}
      />
    </div>
  );
};

export default page;
