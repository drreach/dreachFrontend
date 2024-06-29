import MedicalTab from "@/components/User/dashboard/MedicalTab";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const medidata = [
  {
    id: "#AP977",
    date: "16 Nov 2019",
    description: "Appointment Booking",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Ruby Perrin",
      image: "/assets/doctor-1.jpg",
      specialization: "MBBS, MD",
    },
  },
  {
    id: "#AP974",
    date: "16 Nov 2022",
    description: "Teeth Cleaning",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Rohan Karn",
      image: "/assets/doctor-2.jpg",
      specialization: "MBBS, MD",
    },
  },

  {
    id: "#AP933",
    date: "16 Nov 2021",
    description: "Mouth Cleaning",
    attachment: "dental-test.pdf",
    created: {
      name: "Dr. Aniket Karn",
      image: "/assets/doctor-3.jpg",
      specialization: "MBBS, MD",
    },
  },
];

export interface Root {
  patient: Patient;
  isMyDoctor: boolean;
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

const page = async ({ params }: { params: { patientsId: string } }) => {
  const session = await getServerSession(authOption);
  if (!session) redirect("/");
  const response = await fetch(
    `${process.env.SERVER_URL}/doctor/getPatientsMedicalByDoctor?pid=${params.patientsId}&doctorId=${session?.data.doctorProfile.id}`,
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
    },
  );

  if (response.status !== 200) {
    throw new Error("Something went wrong!");
  }
  const data: Root = await response.json();

  return <MedicalTab data={data} />;
};

export default page;
