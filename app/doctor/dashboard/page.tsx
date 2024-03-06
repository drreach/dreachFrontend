import DashInfo from '@/components/doctor/dashboard/DashInfo'
import PatientsAppointment from '@/components/doctor/dashboard/PatientsAppointment'
import { authOption } from '@/lib/AuthOptions/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOption);
  if(!session || !session?.data || !session?.data?.doctorProfile?.id) return redirect("/")
  const today = new Date();


  // console.log(session.data)

  const  res = await fetch(`${process.env.SERVER_URL}/doctor/getDashInfo?userId=${session.data.doctorProfile.id}&currentLocalTime=${today.toLocaleString()}`,{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "+localStorage.getItem("token")
    },

    cache: "no-cache",
    next:{
      tags:['doctor_dashboard']
    }
  });

  if(res.status!==200){
    throw new Error("Something went wrong!");
}
  const data = await res.json();
  return (
    <div className=''>
        <DashInfo data={{ totalAppointments: data.totalAppointments,
  totalPendingAppointments: data.totalPendingAppointments,
  totalApprovedAppointments: data.totalApprovedAppointments,
  totalRejectedAppointments: data.totalRejectedAppointments,
  totalTodayAppointments:data.totalTodayAppointments}}/>
        <PatientsAppointment datas={{todayAppointMentdDetails:data.todayAppointMentdDetails,upcomingAppointsMents:data.upcomingAppointsMents}}/>
    </div>
  )
}

export default page