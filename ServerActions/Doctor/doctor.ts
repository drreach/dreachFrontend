"use server";

import { authOption } from "@/lib/AuthOptions/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const updateSheduleToDatabase = async (shedules: any, mode: string) => {
  const session = await getServerSession(authOption);
  if (!session || session.data.role !== "DOCTOR") {
    console.log("no session");
    return null;
  }

  try {
    const res = await fetch(`${process.env.SERVER_URL}/doctor/updateShedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        mode === "VIDEO_CONSULT"
          ? JSON.stringify({
              doctorProfileId: session.data.doctorProfile.id,
              shedule: { OnlineShedule: shedules },
            })
          : mode === "HOME_VISIT"
          ? JSON.stringify({
              doctorProfileId: session.data.doctorProfile.id,
              shedule: { HomeShedule: shedules },
            })
          : JSON.stringify({
              doctorProfileId: session.data.doctorProfile.id,
              shedule: { DeskShedule: shedules },
            }),
    });

    const data = await res.json();
    // console.log(data);
    return res.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const hybridDoctorAppointment = async (
  homeDoctorId: string,
  videoDoctorId: string,
  formData: {
    Fname: string;
    Lname: string;
    contact: string;
    email: string;
    reason: string;
  } | null,
  userId: string,
  h_apptDate: string,
  h_slot: string,
  v_apptDate: string,
  v_slot: string,
  lat: number,
  long: number,
  isForOthers: boolean
) => {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/hybridBookAppointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoDoctorId: videoDoctorId,
          homeDoctorId: homeDoctorId,
          userId: userId,
          h_apptDate: h_apptDate,
          v_apptDate: v_apptDate,
          h_slot: h_slot,
          v_slot: v_slot,
          currentLocation: {
            lat: lat,
            long: long,
          },
          isForOthers: isForOthers,
          othersName: isForOthers
            ? `${formData?.Fname} ${formData?.Lname}`
            : null,
          othersContact: formData?.contact,
          othersEmail: formData?.email,
          reason: formData?.reason,
        }),
      }
    );

    return res.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const doctorAppointment = async (
  doctorProfileId: string,
  formData: {
    Fname: string;
    Lname: string;
    contact: string;
    email: string;
  } | null,
  userId: string,
  date: string,
  time: string,
  lat: number,
  long: number,
  isForOthers: boolean,
  mode: string
) => {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/bookAppointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorProfileId: doctorProfileId,
          userId: userId,
          appointmentSlotDate: date,
          appointmentSlotTime: time,
          type: mode,
          currentLocation: {
            lat: lat,
            long: long,
          },
          isForOthers: isForOthers,
          othersName: isForOthers
            ? `${formData?.Fname} ${formData?.Lname}`
            : null,
          othersContact: formData?.contact,
          othersEmail: formData?.email,
        }),
      }
    );

    return res.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const ActionOnPatientsAppointment = async (
  userId: string,
  action: string,
  apptId: string
) => {
  const session = await getServerSession(authOption);
  if (!session || !session.data) return;

  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/actionOnPatients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          action: action,
          doctorProfileId: session.data.doctorProfile.id,
          apptId: apptId,
        }),
      }
    );

    const data = await res.json();

    if (res.status === 201) {
      revalidateTag("doctor_dashboard");
    }
    // console.log(data);
    return res.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const addMedicalRecord = async (formData: FormData) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_URL}/doctor/addMedicalRecord`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // console.log(res);
    // console.log(first)
    return res.status;
  } catch (error) {
    return 500;
  }
};
