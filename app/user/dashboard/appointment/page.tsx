import AppointnmnetTab from '@/components/User/dashboard/AppointnmnetTab'
import Tab from '@/components/User/dashboard/Tab';
import { authOption } from '@/lib/AuthOptions/authOptions';
import { getServerSession } from 'next-auth';
// import TestTable from '@/components/dashboard/User/dashboard/Tables/TestTable';
import React from 'react'
const data = [
    {
      doctorName: "Dr. Ruby Perrin",
      doctorImage: "/assets/doctor-1.jpg",
      AppointmentDate: "14 Nov 2019",
      BookedDate: "12 Nov 2019",
      Amount: "$160",
      status: "Confirmed",
      specialization: "MBBS",
    },
  
    {
      doctorName: "Dr. Ramesh Thakur",
      doctorImage: "/assets/doctor-2.jpg",
      AppointmentDate: "15 Nov 2021",
      BookedDate: "13 Nov 2022",
      Amount: "$505",
      status: "Pending",
      specialization: "Teeth",
    },
  ];
const page = async() => {
  const session = await getServerSession(authOption);
  if (!session || !session?.data?.id) return <div>Not Authorized</div>;
  const res = await fetch(
    `http://localhost:8000/user/getAppointments/${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
     cache:"no-cache"
    }
  );

  const d = await res.json();
  console.log(d);

  return (
   <>
    <Tab  title='Appointment'  />
    <AppointnmnetTab data={d}/>
   </>
  )
}

export default page