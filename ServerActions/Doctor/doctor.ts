"use server"

import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";

export const updateSheduleToDatabase = async (shedules:any) => {
    const session = await getServerSession(authOption);
    if (!session || session.data.role !== "DOCTOR") {
        console.log("no session");
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.SERVER_URL}/doctor/updateShedules`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({doctorProfileId:session.data.doctorProfile.id,shedule:{OnlineShedule:shedules}}),
            }
        );

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }


    

}


export const doctorAppointment=async(doctorProfileId:string,formData:{Fname:string,Lname:string,contact:string,email:string}|null,userId:string,date:string,time:string,lat:number,long:number,isForOthers:boolean)=>{

    try {
        const res = await fetch(`${process.env.SERVER_URL}/doctor/bookAppointment`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            doctorProfileId:doctorProfileId,
            userId:userId,
            appointmentSlotDate:date,
            appointmentSlotTime:time,
            type:"ONLINE",
            currentLocation:{
                lat:lat,
                long:long
            },
            isForOthers:isForOthers,
            othersName:isForOthers?`${formData?.Fname} ${formData?.Lname}`:null,
            othersContact:formData?.contact,
            othersEmail:formData?.email

        })
    });

    return res.status;
    } catch (error) {
        console.log(error);
        
    }
}


export const ActionOnPatientsAppointment =async (userId:string,action:string,apptId:string)=>{

    const session = await getServerSession(authOption);
    if(!session || !session.data) return;

    try {
        const res = await fetch(`${process.env.SERVER_URL}/doctor/actionOnPatients`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userId:userId,
                action:action,
                doctorProfileId:session.data.doctorProfile.id,
                apptId:apptId
            })

        });

        const data = await res.json();

        console.log(data);
        return res.status;
    } catch (error) {

        console.log(error);

        
    }
}