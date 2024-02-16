import MedicalTab from "@/components/User/dashboard/MedicalTab";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export interface Root {
  patient: Patient;
  isMyDoctor: false;
}

export interface Patient {
  medicalRecords: MedicalRecord[];
  id: string;
}

export interface MedicalRecord {
  id: string;
  userId: string;
  doctorProfileId: string;
  recordId: string;
  description: string;
  attachment: string;
  createdAt: string;
  updatedAt: string;
  doctorProfile: DoctorProfile;
}

export interface DoctorProfile {
  user: User;
}

export interface User {
  Fname: string;
  Lname: string;
  profilePic: any;
}

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session) redirect("/");
  const response = await fetch(
    `${process.env.SERVER_URL}/doctor/getPatientsMedicalBySelf?userId=${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //
      },
      cache: "force-cache",
      next: {
        tags: ["doctor_medical_tab"],
      },
    }
  );

  if(response.status!==200){
    throw new Error("Something went wrong!");
}
  const data: Root = await response.json();
  return <MedicalTab data={data} />;
};

export default page;
