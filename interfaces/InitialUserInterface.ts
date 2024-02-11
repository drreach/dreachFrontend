import { Dayjs } from "dayjs";

export interface SheduleInterface {
  mode: string;
  start: string;
  end: string;
}

export interface InitialUserInterface {
  specializatins: string[];
  dob: Date;
  loading: boolean;
  activeDoctorTab: number;
  activePatientsProfileTab: number;

  shedules: string[];

  currentlySelectedSheduleIndex: {
    show: boolean;
    day: string;
  };

  appointMentDetails: {
    doctorId: string;
    date: string;
    time: string;
  };

  apptFor:"ME"|"OTHER",

  currentLocation:{
    lat:number,
    long:number
  },

  doctorDashTabTodayUpcoming:number
}
