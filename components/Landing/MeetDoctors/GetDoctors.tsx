import React from 'react'
import DoctorsCard from './DoctorsCard'
import Link from 'next/link'


export type Root = Root2[]

export interface Root2 {
  id: string
  specializations: string[]
  user: User
}

export interface User {
  Fname: string
  Lname: string
  profilePic?: string
  username: string
}

const GetDoctors = async() => {

  const res = await fetch(`${process.env.SERVER_URL}/user/getPopularDoctors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization":
      //   "Bearer " + localStorage.getItem("token"),
    },
    cache: "force-cache",
    next:{
        // revalidate in 60 minute
        revalidate: 60 * 60 * 1000,
    }
  });

  console.log(res);
  const data:Root = await res.json();
  console.log(data);

  return (
    <div className="w-full max-w-screen-xl mt-5  mx-auto grid gap-5  grid-flow-row lg:grid-cols-4 md:grid-cols-2">
    {data.map((d, i) => {
      return <Link className='no-underline' href={`/doctorprofile/${d.user.username}`}> <DoctorsCard key={i} data={{
        image: d.user.profilePic!,
        name: `${d.user.Fname} ${d.user.Lname}`,
       
        speciality: d.specializations.join(", "),

      }} /></Link>;
    })}
  </div>
  )
}

export default GetDoctors