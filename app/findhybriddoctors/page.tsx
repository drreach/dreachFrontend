import FindDoctorsByHome from "@/components/User/dashboard/FindDoctorByHome";
import { redirect } from "next/navigation";
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

  if (!homeVisitDoctorId || !h_apptDate || !h_slotTime) {
    const res = await fetch(
      `${process.env.SERVER_URL}/user/findDoctorbyHomeVisit`,
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
      <div className="w-full pt-28 flex min-h-screen flex-col  items-center">
        <div className="py-2 my-2 flex flex-col w-full max-w-screen-xl justify-center items-center rounded-md border border-slate-700">
          <p className="text-red-600  p-2 font-bold text-[19px]">
            Note:In Hybrid mode you have to book two doctors i.e Home Visit and
            Video Consult{" "}
          </p>
          <div className="w-full">
            <span className="text-xl ">1)Choose Home Visit Doctor</span>
            <FindDoctorsByHome mode="homevisit" url="" data={data} />
          </div>
        </div>
      </div>
    );
  }

  const url = `homeVisitDoctorId=${homeVisitDoctorId}&h_apptDate=${h_apptDate}&h_slotTime=${h_slotTime}`;
  const dateOnly = h_apptDate.toString().substring(0, 10);
  if (!videoDoctorId || !v_apptDate || !v_slotTime) {
    const res = await fetch(
      `${process.env.SERVER_URL}/user/findDoctorbyVideoConsultation?date=${dateOnly}&slot=${h_slotTime}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache",
      },
    );
    const data = await res.json();
    return (
      <div className="w-full">
        <div className="py-2 my-2 flex w-full max-w-screen-xl justify-center items-center border rounded-md border-slate-700">
          <p className="text-red-600 p-2 font-bold text-[19px]">
            Note:In Hybrid mode you have to book two doctors i.e Home Visit and
            Video Consult{" "}
          </p>
        </div>
        <span className="text-xl ">1)Choose Home Visit Doctor</span>
        <p className="text-[16px] text-green-700 font-bold">
          Home visit Doctor Added to Cart
        </p>
        <span className="text-xl ">2)Choose Video Consult Doctor</span> <br />
        {data.length < 1 && (
          <div>
            <span className="font-bold">
              No online doctors available for this date.Go back and choose
              another date
            </span>
          </div>
        )}
        <FindDoctorsByHome data={data} mode="video" url={url} />
      </div>
    );
  }

  return redirect(
    `/hybridcheckout?homeVisitDoctorId=${homeVisitDoctorId}&h_apptDate=${h_apptDate}&h_slotTime=${h_slotTime}&videoDoctorId=${videoDoctorId}&v_apptDate=${v_apptDate}&v_slotTime=${v_slotTime}`,
  );
};

export default page;
