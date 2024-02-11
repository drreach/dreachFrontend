import FindDoctors from '@/components/User/dashboard/FindDoctors'
import UserDashboard from '@/components/dashboard/User.dashboard'
import React from 'react'

const page = async() => {

  const  res = await fetch(`${process.env.SERVER_URL}/user/findDoctorList`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache"
    });

    if(res.status!==200){
      throw new Error("Internal Server Error");
    }

    const data = await res.json();
    console.log(data)
  return (
   <FindDoctors data={data} />
  )
}

export default page