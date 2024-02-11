import DashInfo from '@/components/doctor/dashboard/DashInfo'
import PatientsAppointment from '@/components/doctor/dashboard/PatientsAppointment'
import { authOption } from '@/lib/AuthOptions/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOption);
  if(!session || !session?.data || !session?.data?.doctorProfile?.id) return redirect("/")

  const  res = await fetch(`http://localhost:8000/doctor/getDashInfo/${session.data.doctorProfile.id}`);

  console.log(res);

  const data = await res.json();
  console.log(data);
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