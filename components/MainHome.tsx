
import React from 'react'
import Header from "@/components/Landing/Header";
import MeetDoctors from "@/components/Landing/MeetDoctors/MeetDoctors";
import Services from "@/components/Landing/Services";
const MainHome = () => {
    
  return (
   <>
    <Header/>
      <Services/>
      <MeetDoctors/>
   </>
  )
}

export default MainHome