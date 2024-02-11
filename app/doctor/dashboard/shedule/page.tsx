import Shedule from '@/components/doctor/dashboard/Shedule'
import { authOption } from '@/lib/AuthOptions/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async() => {

  const session = await getServerSession(authOption);

  if(!session || !session?.data?.doctorProfile?.id) return <div>Not Authorized</div>;


  const res = await fetch(`${process.env.SERVER_URL}/doctor/getShedules/${session?.data.doctorProfile.id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
  });
  // console.log(await res.json())

  console.log(res.status);
  const data = await res.json();
  console.log(data)


  return (
   <Shedule mode={data.doctorProfile.mode} isAvailableForDesk={data.doctorProfile.isAvailableForDesk} OnlineShedule={data.doctorProfile.schedules.OnlineShedule} />
  )
}

export default page