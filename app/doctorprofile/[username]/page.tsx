import DoctorProfile from '@/components/DoctorProfile'
import { authOption } from '@/lib/AuthOptions/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react'

const page = async({ params }:{params:{username:string}}) => {
  const session = await getServerSession(authOption);
  const  res = await fetch(`${process.env.SERVER_URL}/doctor/getdoctorProfile?username=${params.username}&userId=${session?.data?.id}`,{
    method: "GET",

    headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer "+localStorage.getItem("token")
    },
    cache: "no-cache"
});

// console.log(res);
const data = await res.json();
console.log(data);
if(res.status!==200){
  throw new Error("Internal Server Error");
}
console.log(data)


  return (
    // <></>
    <DoctorProfile isDoctorAppointedEver={data.isDoctorAppointedEver} isBookedByCurrentUser={data.isBookedByCurrentUser} status={data.status} slots={data.slotDetails} data={data.doctor}/>
  )
}

export default page