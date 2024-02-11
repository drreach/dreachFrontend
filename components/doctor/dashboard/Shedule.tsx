"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import {
 
  addShedule,
  setCurrentSheduleIndex,
 
  setShedule,
 
  updateShedule,
} from "@/Redux/reducers/UserReducers";
import { updateSheduleToDatabase } from "@/ServerActions/Doctor/doctor";
import TimeSlotSelector from "@/components/Shed";
import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";

interface SheduleTime {
  mode: string;
  start: string;
  end: string;
}

const sortData = (data: SheduleTime[]) => {
  // console.log(p)

  return data;
};



const sheduleTimeOptions = [
 "10:00",
 "10:15",
 "11:00",
 "11:15"


];

const Shedule = ({
  OnlineShedule,
  isAvailableForDesk,
  mode,
}: {
  OnlineShedule: string[];
  isAvailableForDesk: boolean;
  mode: string;
}) => {
  const mData = useAppSelector((state) => state.userReducer.shedules);

  const dispatch = useAppDispatch();
  const currentShedule = useAppSelector(
    (state) => state.userReducer.currentlySelectedSheduleIndex
  );

  const handleOnUpdateShedules = async () => {
    const res = await updateSheduleToDatabase(mData);
    console.log(res);
  };

  useEffect(() => {
    console.log(OnlineShedule,isAvailableForDesk,mode);
    dispatch(setShedule(OnlineShedule));
  }, [OnlineShedule]);
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

                   <TimeSlotSelector/>
                  
                        

                      <div className="submit-section my-5 text-center">
                        <button
                          onClick={handleOnUpdateShedules}
                          type="button"
                          className="btn btn-primary submit-btn"
                        >
                          Update Shedules
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* /Footer */}
      {/* /Main Wrapper */}

      {/* Add Time Slot Modal */}
      {/* <Modal
        show={currentShedule.show}
        centered
        className="w-full"
        id="add_time_slot"
      >
        <Modal.Header
          onClick={() =>
            dispatch(
              setCurrentSheduleIndex({
                day: "mon",
                show: false,
              })
            )
          }
          closeButton
        >
          <Modal.Title>
            {currentShedule.day.charAt(0).toUpperCase()}
            {currentShedule.day.slice(1)} Shedule
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <div>
            <div className="hours-info">
              <div className="row form-row hours-cont">
                <div className="col-12 col-md-10">
                  {mData &&
                    mData.map(
                      (item, index) => {
                        return (
                          <div className="row form-row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Start Time</label>
                                <select
                                  defaultValue={item}
                                  onChange={(event) =>
                                    dispatch(
                                      updateShedule({
                                        index: index,
                                        shedules: event.target.value,
                                      })
                                    )
                                  }
                                  className="form-control"
                                >
                                  {sheduleTimeOptions.filter((v)=>!mData.includes(v)).map((item, index) => {
                                    return <option value={item}>{item}</option>;
                                  })}
                                </select>
                              </div>
                            </div>
                           
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
            <div className="add-more mb-3">
              <button
                onClick={() => {
                  dispatch(
                    addShedule(
                  "09:00"
                    )
                  );
                }}
                className="add-hours"
              >
                <i className="fa fa-plus-circle" /> Add More
              </button>
            </div>
            <div className="submit-section text-center">
              <button
                onClick={() =>
                  dispatch(
                    setCurrentSheduleIndex({
                      day: currentShedule.day,
                      show: false,
                    })
                  )
                }
                type="button"
                className="btn btn-primary submit-btn"
              >
                Save Changes
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Shedule;
