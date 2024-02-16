"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setShedule } from "@/Redux/reducers/UserReducers";
import { updateSheduleToDatabase } from "@/ServerActions/Doctor/doctor";
import TimeSlotSelector from "@/components/Shed";
import { loadToast, updateToast } from "@/utils/utils";
import React, { useEffect } from "react";

const Shedule = ({
  OnlineShedule,
  DeskShedules,
  HomeShedules,
  isAvailableForDesk,
  mode,
}: {
  OnlineShedule: string[];
  DeskShedules: string[];
  HomeShedules: string[];
  isAvailableForDesk: boolean;
  mode: string;
}) => {
  const mData = useAppSelector((state) => state.userReducer.shedules);
  const availableDeskData = useAppSelector(
    (state) => state.userReducer.availableForDeskShedule
  );

  const dispatch = useAppDispatch();
  const handleOnUpdateShedules = async (isAvailableForDesk: boolean) => {
    const toastId = loadToast("Please wait,updating shedules");
    if (!isAvailableForDesk) {
      const res = await updateSheduleToDatabase(mData, mode);
      if (res == 201) {
        return updateToast(toastId, "Shedules Updated Successfully", "success");
      }
      return updateToast(toastId, "Failed to update Shedules", "error");
    } else {
      const res = await updateSheduleToDatabase(availableDeskData, "OTHER");
      if (res == 201) {
        return updateToast(toastId, "Shedules Updated Successfully", "success");
      }
      return updateToast(toastId, "Failed to update Shedules", "error");
    }
  };

  useEffect(() => {
    if (mode === "HOME_VISIT") {
      dispatch(
        setShedule({
          shedules: HomeShedules,
          mode: "VIDEO",
        })
      );
    } else if (mode === "VIDEO_CONSULT") {
      dispatch(
        setShedule({
          shedules: OnlineShedule,
          mode: "VIDEO",
        })
      );
    }

    if (isAvailableForDesk) {
      dispatch(
        setShedule({
          shedules: DeskShedules,
          mode: "OTHER",
        })
      );
    }
  }, [OnlineShedule, DeskShedules, HomeShedules]);
  return (
    <>
      <div className="row overflow-y-auto">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title my-3">Schedule Timings</h4>
              <div className="profile-box">
                {/* <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Timing Slot Duration</label>
                      <select className="select form-control">
                        <option>-</option>
                        <option>15 mins</option>
                        <option>30 mins</option>
                        <option>45 mins</option>
                        <option>1 Hour</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card schedule-widget mb-0 flex  overflow-y-auto flex-col">
                      {/* Schedule Header */}
                      <span className="font-bold text-[14px] p-2">
                        Update Shedule for {mode}
                      </span>

                      <TimeSlotSelector isAvailableForDesk={false} />

                      <div className="submit-section my-5 text-center">
                        <button
                          onClick={() => {
                            handleOnUpdateShedules(false);
                          }}
                          type="button"
                          className="btn btn-primary submit-btn"
                        >
                          Update Shedules
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isAvailableForDesk && (
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card schedule-widget mb-0 flex  overflow-y-auto flex-col">
                        {/* Schedule Header */}
                        <span className="font-bold text-[14px] p-2">
                          Update Shedule for Desk Appointment
                        </span>
                        <TimeSlotSelector isAvailableForDesk={true} />

                        <div className="submit-section my-5 text-center">
                          <button
                            onClick={() => {
                              handleOnUpdateShedules(true);
                            }}
                            type="button"
                            className="btn btn-primary submit-btn"
                          >
                            Update Shedules
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shedule;
