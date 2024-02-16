import { convertDateToFormat } from "@/utils/utils";
import Link from "next/link";
import React from "react";

interface Data {
  h_doctorName: string | undefined;
  h_apptDate: string | undefined;
  h_slotTime: string | undefined;
  v_doctorName: string | undefined;
  v_apptDate: string | undefined;
  v_slotTime: string | undefined;
}

const BookingSuccess = ({ data }: { data: Data }) => {
  return (
    <>
      {/* Page Content */}
      <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Success Card */}
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check" />
                    <h3>Appointment booked Successfully!</h3>
                    <p>
                      Appointment booked with{" "}
                      <strong>{data.h_doctorName}</strong>
                      <br /> on{" "}
                      <strong>
                        {convertDateToFormat(data.h_apptDate)} at{" "}
                        {data.h_slotTime}
                      </strong>
                    </p>
                    {data.v_doctorName && (
                      <p>
                        Appointment booked with{" "}
                        <strong>{data.v_doctorName}</strong>
                        <br /> on{" "}
                        <strong>
                          {convertDateToFormat(data.v_apptDate)} at{" "}
                          {data.v_slotTime}
                        </strong>
                      </p>
                    )}
                    <Link
                      href="/user/dashboard"
                      className="btn btn-primary view-inv-btn"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Success Card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
