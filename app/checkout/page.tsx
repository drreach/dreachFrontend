import Checkout from '@/components/Checkout'
import { format } from 'date-fns';
import { parse, parseISO } from 'date-fns';
import { formatISO } from 'date-fns';
import React from 'react'
type Props = {
    params: {},
    searchParams: { [key: string]: string | string[] | undefined },
  }

const page = async(props:Props) => {
    const {doctorId,time,date} = props.searchParams;
    if(!date || !time || !doctorId) return;

    const dt = new Date(date.toString());
    
    const spaceIndex = date.indexOf(' '); // Find the index of the space in the string
    const dateOnly = date.toString().substring(0, 10);
     // Extract the date part using substring
    //  const dateOnly = originalDateTime.substring(0, 10); // Extract the date part using substring

// console.log(dateOnly); 
    
    console.log(dateOnly);
    const res = await fetch(`${process.env.SERVER_URL}/doctor/checkDoctorAvailability`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },

        body:JSON.stringify({
            doctorId:doctorId,date:dateOnly,slot:time
        })
    });
    console.log(res);
    const data = await res.json();
    console.log(data)
    

    if(!data.isAvailable)
    return <div className='pt-28 min-h-screen'>
        <h1 className='text-[20px] text-center'>Doctor Not Available at this Time</h1>
    </div>

  return (


  <div className='pt-28 mx-2'>
      <Checkout data={data} date={dateOnly} time={time.toString()}/>
  </div>
  )
}

export default page