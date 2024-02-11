import Mypatients from '@/components/doctor/dashboard/Mypatients'
import { authOption } from '@/lib/AuthOptions/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

interface Data{
    Fname:string,
    Lname:string,
    email:string,
    dob:string,
    contact:string,
    address:{
        address: String;
        city:    String;
        state:   String;
        country: String;
        pincode: String;
    },
    userId:string,
    bloodGroup:string;
    profilePic:string
}

const data:Data[]=[
    {
        Fname:"Ranjit",
        Lname:"Das",
        address:{
            address:"BBSR",
            city:"BBSR",
            country:"India",
            pincode:"751024",
            state:"Odisha"
        },
        bloodGroup:"O+",
        contact:"9631627104",
        dob:"2000-07-17",
        email:"21053420@kiit.ac.in",
        profilePic:"/assets/doctor-1.jpg",
        userId:"#PT_0112"

    },

    {
        Fname:"Ranjit",
        Lname:"Das",
        address:{
            address:"BBSR",
            city:"BBSR",
            country:"India",
            pincode:"751024",
            state:"Odisha"
        },
        bloodGroup:"O+",
        contact:"9631627104",
        dob:"2000-07-17",
        email:"21053420@kiit.ac.in",
        profilePic:"/assets/doctor-2.jpg",
        userId:"#PT_0112"

    }
]

const page = async() => {
    const session = await getServerSession(authOption);
    if(!session || !session.data) return redirect("/");
    const res = await fetch(`${process.env.SERVER_URL}/doctor/getPatients/${session?.data.doctorProfile.id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
  return (
   <>
   
   <div className='row row-grid'>
   {data.map((d:any,i:number)=>{
    return <Mypatients key={i} data={d.user}/>
   })}
   </div>
   </>
  )
}

export default page