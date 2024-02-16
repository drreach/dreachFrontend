import Mypatients from '@/components/doctor/dashboard/Mypatients'
import { authOption } from '@/lib/AuthOptions/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
const page = async() => {
    const session = await getServerSession(authOption);
    if(!session || !session.data) return redirect("/");
    const res = await fetch(`${process.env.SERVER_URL}/doctor/getPatients/${session?.data.doctorProfile.id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        
    });
    if(res.status!==200){
        throw new Error("Something went wrong!");
    }
    const data = await res.json();
  return (
   <>

   {data.length===0 && <div className='font-bold'>You have currently no Patients</div>}
   
   <div className='row row-grid'>
   {data.map((d:any,i:number)=>{
    return <Mypatients key={i} data={d.user}/>
   })}
   </div>
   </>
  )
}

export default page