import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setAddMedicalRecordDialog } from "@/Redux/reducers/UserReducers";
import { validateRoutes } from "@/ServerActions";
import { addMedicalRecord } from "@/ServerActions/Doctor/doctor";
import { loadToast, updateToast } from "@/utils/utils";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddMedicalRecord = ({ patientsId }: { patientsId: string }) => {
  const session = useSession();

  const medicalRecordDialog = useAppSelector(
    (state) => state.userReducer.addMedicalRecordDialog,
  );
  const dispatch = useAppDispatch();
  const sty = {
    display: "block",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = async (data: any) => {
    if (!session || !session.data?.data?.doctorProfile?.id || !patientsId)
      return toast.error("Session Expired,Please Login Again");
    const toastId = loadToast("Please wait,adding medical record");
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("file", data.file[0]);
    formData.append("patientsId", patientsId);
    formData.append("doctorId", session.data?.data?.doctorProfile.id as string);
    const res = await addMedicalRecord(formData);
    if (res === 201) {
      dispatch(setAddMedicalRecordDialog(false));
      validateRoutes("doctor_medical_tab");
      reset();
      return updateToast(
        toastId,
        "Medical Record Added Successfully",
        "success",
      );
    }
    return updateToast(toastId, "Failed to add Medical Record", "error");
  };
  return (
    <>
      {/* Add Medical Records Modal */}
      <div
        className={`modal fade custom-modal ${
          medicalRecordDialog && "show active:"
        } bg-gray-200/60`}
        style={medicalRecordDialog ? sty : {}}
        id="add_medical_records"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Medical Records</h3>
              <button
                onClick={() => dispatch(setAddMedicalRecordDialog(false))}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    disabled
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue={new Date().toLocaleDateString()}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Upload File</label>
                  <input
                    {...register("file", { required: true })}
                    type="file"
                    className="form-control"
                  />
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(setAddMedicalRecordDialog(false))}
                    className="btn btn-secondary submit-btn"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}
    </>
  );
};

export default AddMedicalRecord;
