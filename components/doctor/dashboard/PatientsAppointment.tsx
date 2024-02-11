"use client"
import React from 'react'
import AppointmentCard from './AppointmentCard'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks/hooks'
import { setDoctorDashTabTodayUpcoming } from '@/Redux/reducers/UserReducers'



const PatientsData=[
    {
        patient:{
            name:"Elsie Gilley",
            avatar:"/assets/patients/patient6.jpg",
            id:"#PT0006"
        },
        apptDate:"14 Nov 2019",
        purpose:"Fever",
        type:"Old Patient",
        amount:"$300",
        status:"Confirmed",



        
    },
    {
        patient:{
            name:"Joan Gardner",
            avatar:"/assets/patients/patient7.jpg",
            id:"#PT0007"
        },
        apptDate:"14 Nov 2019",
        purpose:"General",
        type:"Old Patient",
        amount:"$100",
        status:"Confirmed",

    }
]


interface Data {
  todayAppointMentdDetails: {
      user: {
      Fname: string,
      Lname: string,
      contact: string,
      profilePic: string|null,
      userId:string
      id:string
      },
      isForOthers: boolean,
      othersContact: string|null,
      appointmentSlotTime: string,
      appointmentSlotDate:string
      id: string,
      status:string
      doctorProfileId:string,
      userId: string
      }[],
    
  


    upcomingAppointsMents: {
      user: {
        Fname: string,
        Lname: string,
        contact: string,
        profilePic: string|null,
        userId:string
        id:string
        },
        isForOthers: boolean,
        othersContact: string|null,
        appointmentSlotTime: string,
        appointmentSlotDate:string
        id: string,
        status:string
        doctorProfileId:string,
        userId: string
        }[],
      
}

const PatientsAppointment = ({datas}:{datas:Data}) => {

  const tab = useAppSelector((state)=>state.userReducer.doctorDashTabTodayUpcoming);
  const dispacth = useAppDispatch();
  return (
    <div className="row">
    <div className="col-md-12">
      <h4 className="mb-4">Patient Appoinment</h4>
      <div className="appointment-tab">
        {/* Appointment Tab */}
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
          <li onClick={()=>dispacth(setDoctorDashTabTodayUpcoming(0))} className="nav-item">
            <a
              className={`nav-link animate-in ease-linear ${tab===0 && 'active'}`}
              href="#upcoming-appointments"
              data-toggle="tab"
            >
              Today
            </a>
          </li>
          <li onClick={()=>dispacth(setDoctorDashTabTodayUpcoming(1))} className="nav-item">
            <a
              className={`nav-link animate-in ease-linear ${tab===1 && 'active'}`}
              href="#today-appointments"
              data-toggle="tab"
            >
              Upcoming
            </a>
          </li>
        </ul>
        {/* /Appointment Tab */}
        <div className="tab-content">
          {/* Upcoming Appointment Tab */}
          <div
            className={`tab-pane ${tab===0 && "show active"} `}
            id="upcoming-appointments"
          >
            <div className="card card-table mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Appt Date</th>
                        <th>contact</th>
                        <th>ApptFor</th>
                        <th className="text-center">Paid Amount</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                   {datas.todayAppointMentdDetails.map((data,index)=>{
                    return <AppointmentCard key={index} upcoming={false} data={data}/>
                   })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Upcoming Appointment Tab */}


          {/* Today Appointment Tab */}
          <div className={`tab-pane ${tab===1 && "show active"} `}id="today-appointments">
            <div className="card card-table mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                      <th>Patient Name</th>
                        <th>Appt Date</th>
                        <th>contact</th>
                        <th>ApptFor</th>
                        <th className="text-center">Paid Amount</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                   {datas.upcomingAppointsMents.map((data,index)=>{
                    return <AppointmentCard key={index} upcoming={true} data={data}/>
                   })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Today Appointment Tab */}





        </div>
      </div>
    </div>
  </div>


  )
}

export default PatientsAppointment