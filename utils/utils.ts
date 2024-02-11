

export const monthMap:any ={
    "1":"Jan",
    "2":"Feb",
    "3":"Mar",
    "4":"Apr",
    "5":"May",
    "6":"Jun",
    "7":"July",
    "8":"Aug",
    "9":"Sept",
    "10":"Oct",
    "11":"Nov",
    "12":"Dec",
  }
export function convertDateToFormat(date="2024-01-17"){
    const dateObj = new Date(date);
    const month = monthMap[dateObj.getMonth()+1];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  
  }
  


  export const generateTimeSlots = (gap:number) => {
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
  