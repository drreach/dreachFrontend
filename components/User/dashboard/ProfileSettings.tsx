"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setDob } from "@/Redux/reducers/UserReducers";
import { UpdateProfileImage, updateUser } from "@/ServerActions";
import { DatePickerDemo } from "@/components/DatePicker";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const bloodGroupMap = {
  "A-": "A_NEGATIVE",
  "A+": "A_POSITIVE",
  "B-": "B_NEGATIVE",
  "B+": "B_POSITIVE",
  "AB-": "AB_NEGATIVE",
  "AB+": "AB_POSITIVE",
  "O-": "O_NEGATIVE",
  "O+": "O_POSITIVE",
};

const ProfileSettings = () => {
  const router = useRouter();
  const dispacth = useAppDispatch();
  const dobDate = useAppSelector((state) => state.userReducer.dob);
  const onSubmit = async (data: any) => {
    if (!session.data?.data.id) {
      return alert("Auth Required");
    }
    const {
      Fname,
      Lname,

      bloodGroup,
      gender,
      contact,
      address,
      city,
      state,
      pincode,
      country,
    } = data;
    const Address = {
      address,
      city,
      state,
      pincode,
      country,
    };
    const payload = {
      Fname,
      Lname,
      dob: dobDate.toString(),
      bloodGroup,
      contact,
      Address,
      userId: session.data?.data.id,
      gender,
    };

    console.log(
      Fname,
      Lname,
      dobDate.toString(),
      bloodGroup,
      contact,
      address,
      city,
      state,
      pincode,
      country
    );

    const update = await updateUser(payload);

    if (update) {
      await session.update({
        ...session,
        data: update,
      });

      router.push("/user/dashboard");
    }

    console.log(update);
  };

  const [file, setFile] = React.useState<File | null>(null);

  useEffect(() => {
    console.log("Run something");
    if (session.data?.data.dob)
      dispacth(setDob(new Date(session.data.data.dob) as Date));
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const session = useSession();

  if (session.status === "loading") {
    return <div className="h-[900px]">Loading...</div>;
  }

  if (session.status === "unauthenticated" || !session.data) {
    return redirect("/");
  }

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleOnProfileChange = async () => {
    if (!file) {
      return alert("No File Selected");
    }

    const formData = new FormData();
    formData.append("profileImage", file);
    formData.set("userId", session.data.data.id);
    console.log(formData);

    console.log(formData.get("userId"));

    const res = await UpdateProfileImage(formData);

    if (!res) {
      return alert("Error Uploading Image");
    }

    const { profilePic, ...rest } = session.data.data;

    const newData = {
      ...rest,
      profilePic: res.profilePic,
    };

    //update session
    await session.update({
      ...session,
      data: newData,
    });

    // console.log(res);
  };

  return (
    <>
      {/* {JSON.stringify(session.data)} */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  {/* Profile Settings Form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src={`${
                                  session.data.data.profilePic ?
                                  `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${session.data.data.profilePic}`
                                  :
                                  "/assets/doctor-2.jpg"
                                } `}
                                alt="User Image"
                              />
                            </div>
                            <div className="upload-img  flex flex-col">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload" /> Edit Image
                                </span>
                                <input
                                  onChange={handleOnFileChange}
                                  type="file"
                                  className="upload"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={handleOnProfileChange}
                                className=" w-[150px] btn btn-primary"
                              >
                                Save{" "}
                              </button>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            {...register("Fname", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={session.data.data.Fname ?? ""}
                          />
                          {errors.Fname && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6 ">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            {...register("Lname", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={session.data.data.Lname ?? ""}
                          />
                          {errors.Lname && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <div className="cal-icon">
                            {/* <input
                              {...register("dob", { required: true })}
                              type="date"
                              className=" w-full border border-gray-500 py-2 px-2 rounded-md "

                              defaultValue={session.data.data.dob ?? ""}
                            /> */}

                            <DatePickerDemo />
                            {errors.dob && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select
                            defaultValue={session.data.data.gender}
                            {...register("gender", { required: true })}
                            className="form-control select"
                          >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>

                          {errors.gender && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Blood Group</label>
                          <select
                            {...register("bloodGroup", { required: "true" })}
                            className="form-control select"
                          >
                            {Object.keys(bloodGroupMap).map((key) => {
                              return (
                                <option
                                  selected={
                                    session.data.data.bloodGroup ===
                                    bloodGroupMap[
                                      key as keyof typeof bloodGroupMap
                                    ]
                                  }
                                  value={
                                    bloodGroupMap[
                                      key as keyof typeof bloodGroupMap
                                    ]
                                  }
                                >
                                  {key}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Email ID</label>
                          <input
                            // {...register("email", { required: true })}
                            disabled
                            type="email"
                            className="form-control"
                            defaultValue={session.data.data.email ?? ""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            {...register("contact", { required: true })}
                            type="text"
                            defaultValue={session.data.data.contact ?? ""}
                            className="form-control"
                          />
                          {errors.contact && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            {...register("address", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={
                              session.data.data.address?.address ?? ""
                            }
                          />
                          {errors.address && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            {...register("city", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={session.data.data.address?.city ?? ""}
                          />
                          {errors.city && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            {...register("state", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={
                              session.data.data.address?.state ?? ""
                            }
                          />
                          {errors.state && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input
                            {...register("pincode", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={
                              session.data.data.address?.pincode ?? ""
                            }
                          />
                          {errors.pincode && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            {...register("country", { required: true })}
                            type="text"
                            className="form-control"
                            defaultValue={
                              session.data.data.address?.country ?? ""
                            }
                          />
                          {errors.country && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                  {/* /Profile Settings Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ProfileSettings;
