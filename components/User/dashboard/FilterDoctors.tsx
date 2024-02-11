import React from "react";

const sheduleTime = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
];


const mapSheduleTime ={
    "09:00":"09:00 AM",
    "09:30":"09:30 AM",
    "10:00":"10:00 AM",
    "10:30":"10:30 AM",
    "11:00":"11:00 AM",
    "11:30":"11:30 AM",
    "12:00":"12:00 PM",
    "12:30":"12:30 PM",
    "13:00":"01:00 PM",
    "13:30":"01:30 PM",
    "14:00":"02:00 PM",
    "14:30":"02:30 PM",
    "15:00":"03:00 PM",
    "15:30":"03:30 PM",
    "16:00":"04:00 PM",
    "16:30":"04:30 PM",
    "17:00":"05:00 PM",
    "17:30":"05:30 PM",
    "18:00":"06:00 PM",
    "18:30":"06:30 PM",
    "19:00":"07:00 PM",
    "19:30":"07:30 PM",
    "20:00":"08:00 PM",
    "20:30":"08:30 PM",
    "21:00":"09:00 PM",
    "21:30":"09:30 PM",
    "22:00":"10:00 PM",
    "22:30":"10:30 PM",
    "23:00":"11:00 PM",
    "23:30":"11:30 PM",
    "01:00":"01:00 AM",
    "01:30":"01:30 AM",
    "02:00":"02:00 AM",
    "02:30":"02:30 AM",
    "03:00":"03:00 AM",
    "03:30":"03:30 AM",
    "04:00":"04:00 AM",
    "04:30":"04:30 AM",
    "05:00":"05:00 AM",
    "05:30":"05:30 AM",
    "06:00":"06:00 AM",
    "06:30":"06:30 AM",
    "07:00":"07:00 AM",
    "07:30":"07:30 AM",
    "08:00":"08:00 AM",
    "08:30":"08:30 AM",
}



const checkDoctorTime=()=>{
    const t = "19:00"
    //append the t to current date
    const d = new Date()
    const date = d.toISOString().split("T")[0]
    const time = date+"T"+t
    
    console.log(time)
    const currentTime = new Date().toISOString()
    console.log(time,currentTime)
    if(time>currentTime){
        console.log("Doctor is available")
    }
  
   
}

const FilterDoctors = () => {

    checkDoctorTime()
  return (
    <div className="flex flex-col">
      <div>
        <p>Filter by Mode</p>
        <select name="" id="">
          <option value="NO-SELECT">NO-SELECT</option>
          <option value="ONLINE">ONLIE</option>
          <option value="ONLINE">OFFLINE</option>
          <option value="HYBRID">HYBRID</option>
        </select>
      </div>

      <div>
        <p>Filter by Available Time</p>
        <div className="flex gap-2">
        <select name="" id="">
            {sheduleTime.map((d,v)=>{
                return <option key={v} value={d}>{mapSheduleTime[d as keyof typeof mapSheduleTime]}</option>
            
            }
            )}
        </select>

      <span>TO</span>
        <select name="" id="">
            {sheduleTime.map((d,v)=>{
                return <option key={v} value={d}>{mapSheduleTime[d as keyof typeof mapSheduleTime]}</option>
            }
            )}
        </select>
        </div>
      </div>
    </div>
  );
};

export default FilterDoctors;
