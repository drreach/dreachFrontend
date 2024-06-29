import { Id, toast } from "react-toastify";

export const monthMap: any = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "July",
  "8": "Aug",
  "9": "Sept",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};
export function convertDateToFormat(date = "2024-01-17") {
  const dateObj = new Date(date);
  const month = monthMap[dateObj.getMonth() + 1];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
}

export const generateTimeSlots = (gap: number) => {
  const times: string[] = [];
  for (let hour = 1; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += gap) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(timeString);
    }
  }
  return times;
};

export function calculateAge(birthdate: string) {
  const birthDate = new Date(birthdate);
  const difference = Date.now() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const loadToast = (message: string) => {
  const toastId = toast.loading(message, {
    position: "top-center",
    className: "text-white bg-black",
  });
  return toastId;
};

export const updateToast = (toastId: Id, message: string, type: string) => {
  toast.update(toastId, {
    render: message,
    type: type as any,
    isLoading: false,
    position: "top-center",
    className: "text-white bg-black",
    autoClose: 2000,
  });
};

export const mapBloodGroup = {
  A_POSITIVE: "A+",
  A_NEGATIVE: "A-",
  B_POSITIVE: "B+",
  B_NEGATIVE: "B-",
  AB_POSITIVE: "AB+",
  AB_NEGATIVE: "AB-",
  O_POSITIVE: "O+",
  O_NEGATIVE: "O-",
};

export const modeMap = {
  VIDEO_CONSULT: "Video Consult",
  CLINIC_VISIT: "Clinic Visit",
  HOME_VISIT: "Home Visit",
};
