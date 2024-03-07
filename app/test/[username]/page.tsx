import { authOption } from '@/lib/AuthOptions/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react'
type Props = {
    params: {
      username: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
const page = async(props:Props) => {

  //   const session = await getServerSession(authOption);
  //   const today = new Date();


  // const res = await fetch(


  //   `${process.env.SERVER_URL}/doctor/getDoctorProfileByusername?user=${props.params.username}&userId=${session?.data?.id}&startDate=${today}`,
  //   {
  //     method: "GET",

  //     headers: {
  //       "Content-Type": "application/json",
  //       // "Authorization": "Bearer "+localStorage.getItem("token")
  //     },
  //     cache: "no-cache",
  //   }
  // );

  // console.log(res);
  return (
    <div>page</div>
  )
}

export default page