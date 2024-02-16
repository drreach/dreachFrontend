import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { addShedule, removeShedule } from "@/Redux/reducers/UserReducers";
import { generateTimeSlots } from "@/utils/utils";
import { useEffect, useState } from "react";

const TimeSlotSelector = ({
  isAvailableForDesk,
}: {
  isAvailableForDesk: boolean;
}) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const selectedSlots = 
   useAppSelector((state) => isAvailableForDesk?state.userReducer.availableForDeskShedule:state.userReducer.shedules)
    // : useAppSelector((state) => state.userReducer.shedules);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const times = generateTimeSlots(30);
    if (times) setTimeSlots(times);
  }, []);

  const handleAddSlot = () => {
    if (selectedTime && !selectedSlots.includes(selectedTime)) {
      //   setSelectedSlots([...selectedSlots, selectedTime]);
      dispatch(
        addShedule({
          shedules: selectedTime,
          mode: isAvailableForDesk ? "OTHER" : "VIDEO",
        })
      );
      setSelectedTime("");
    }
  };

  const availableTimeSlots = timeSlots.filter(
    (time) => !selectedSlots.includes(time)
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="">
      <select
        className="form-select"
        aria-label="Default select example"
        value={selectedTime}
        onChange={handleSelectChange}
      >
        <option value="">Select a time</option>
        {availableTimeSlots.map((time, index) => (
          <option key={index} value={time}>
            {parseInt(time.split(":")[0], 10) >= 12
              ? `${
                  parseInt(time.split(":")[0], 10) === 12
                    ? 12
                    : parseInt(time.split(":")[0], 10) - 12
                }:${time.split(":")[1]} PM`
              : `${time} AM`}
          </option>
        ))}
      </select>
      <button className="btn btn-success my-2 mx-2" onClick={handleAddSlot}>
        Add
      </button>
      <div>
        {/* <h3>Selected Slots:</h3> */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2 mx-2">
          {selectedSlots.map((slot, index) => (
            <div
              onClick={() =>
                dispatch(
                  removeShedule({
                    index,
                    mode: isAvailableForDesk ? "OTHER" : "VIDEO",
                  })
                )
              }
              className="bg-green-500 rounded-md items-center flex hover:bg-red-400 flex-row justify-around cursor-pointer text-white font-bold w-full"
              key={index}
            >
              <span>
                {parseInt(slot.split(":")[0], 10) >= 12
                  ? `${
                      parseInt(slot.split(":")[0], 10) === 12
                        ? 12
                        : parseInt(slot.split(":")[0], 10) - 12
                    }:${slot.split(":")[1]} PM`
                  : `${slot} AM`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotSelector;
