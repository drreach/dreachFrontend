"use client";
import { addReview } from "@/ServerActions";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
// import { useForm } from 'react-hook-form'

const WriteDoctorReview = ({
  doctorProfileId,
}: {
  doctorProfileId: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onAddReview = async (data: any) => {
    if (!data.comment) return;
    const res = await addReview({
      doctorProfileId: doctorProfileId,
      comment: data.comment,
    });

    if (!res) return alert("Review not added");
    if (res.status === 201) {
      alert("Review Added");
    }
  };

  return (
    <form onSubmit={handleSubmit(onAddReview)}>
      <div className="form-group">
        <label>Review</label>
        {/* <div className="star-rating">
        <input
          id="star-5"
          type="radio"
          name="rating"
          defaultValue="star-5"
        />
        <label htmlFor="star-5" title="5 stars">
          <i className="active fa fa-star" />
        </label>
        <input
          id="star-4"
          type="radio"
          name="rating"
          defaultValue="star-4"
        />
        <label htmlFor="star-4" title="4 stars">
          <i className="active fa fa-star" />
        </label>
        <input
          id="star-3"
          type="radio"
          name="rating"
          defaultValue="star-3"
        />
        <label htmlFor="star-3" title="3 stars">
          <i className="active fa fa-star" />
        </label>
        <input
          id="star-2"
          type="radio"
          name="rating"
          defaultValue="star-2"
        />
        <label htmlFor="star-2" title="2 stars">
          <i className="active fa fa-star" />
        </label>
        <input
          id="star-1"
          type="radio"
          name="rating"
          defaultValue="star-1"
        />
        <label htmlFor="star-1" title="1 star">
          <i className="active fa fa-star" />
        </label>
      </div> */}
      </div>

      <div className="form-group">
        <label>Your review</label>
        <textarea
          {...register("comment", {
            required: { value: true, message: "Required" },
            maxLength: { value: 100, message: "Max lenght exceeds." },
          })}
          id="review_desc"
          maxLength={100}
          className="form-control"
          defaultValue={""}
        />
        {errors.comment && (
          <span className="text-danger">
            {errors?.comment?.message?.toString()}
          </span>
        )}
      </div>
      <hr />

      <div className="submit-section">
        <button type="submit" className="btn btn-primary submit-btn">
          Add Review
        </button>
      </div>
    </form>
  );
};

export default WriteDoctorReview;
