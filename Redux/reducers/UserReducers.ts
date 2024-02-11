

import { InitialUserInterface } from "@/interfaces/InitialUserInterface";
import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";





const initialState:InitialUserInterface = {
  
specializatins:[],
dob:new Date(),
loading:false,
activeDoctorTab:0,
activePatientsProfileTab:0,
currentlySelectedSheduleIndex:{
    show:false,
    day:"mon",

},

shedules:[],
appointMentDetails:{
    date:"",
    doctorId:"",
    time:""
},

apptFor:"ME",

currentLocation:{
    lat:0.00,
    long:0.00
},

doctorDashTabTodayUpcoming:0




}
const UserSlice = createSlice({
    name:"UserSlice",
    initialState,
    reducers:{

        setSpecializations:(state,action)=>{
            state.specializatins=action.payload
        },

        addSpecialization:(state,action)=>{
            state.specializatins.push(action.payload)
        },

        removeSpecialization:(state,action)=>{
            const {index} = action.payload;
            state.specializatins.splice(index,1)
        },

        setDob:(state,action)=>{
            state.dob=action.payload
        },


        setLoading:(state,action)=>{
            state.loading=action.payload
        },

        setActiveDotcorTab:(state,action)=>{
            state.activeDoctorTab=action.payload
        },
        setActivePatientsProfileTab:(state,action)=>{
            state.activePatientsProfileTab=action.payload
        },

        setCurrentSheduleIndex:(state,action)=>{
            state.currentlySelectedSheduleIndex=action.payload
        },


        removeShedule:(state,action)=>{
            const {index} = action.payload
            state.shedules.splice(index,1)
        },

        addShedule:(state,action)=>{
            state.shedules.push(action.payload);
        },

        updateShedule:(state,action)=>{
            const {shedules,index} = action.payload;
            state.shedules[index]=shedules;
          
        },

        setShedule:(state,action)=>{
            state.shedules = action.payload;
        },

        setAppointmentDetails:(state,action)=>{
            state.appointMentDetails = action.payload;
        },

        setAptFor:(state,action)=>{
            state.apptFor=action.payload;
        },

        setCurrentLocation:(state,action)=>{
            state.currentLocation = action.payload
        },

        setDoctorDashTabTodayUpcoming:(state,action)=>{
            state.doctorDashTabTodayUpcoming = action.payload;
        }
       
    }
    
})

export const {addSpecialization,removeSpecialization,setSpecializations,setDob,setLoading,setActiveDotcorTab,setActivePatientsProfileTab,removeShedule,setCurrentSheduleIndex,updateShedule,setShedule,addShedule,setAppointmentDetails,setAptFor,setCurrentLocation,setDoctorDashTabTodayUpcoming} = UserSlice.actions



export default UserSlice.reducer;