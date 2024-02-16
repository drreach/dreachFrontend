"use client";
import { createDoctorProfile } from "@/ServerActions";
import { useSession } from "next-auth/react";
import React from "react";

const ApplyDoctor = () => {
  const session = useSession();
  if (!session.data) return <div>Not logged in</div>;
  return (
    <div className="w-full h-auto flex justify-center my-8 flex-col">
      <p>Create your doctor profile by using the create button below.</p>
      <button
        className="btn btn-success w-[250px]"
        onClick={async () => {
          if (!session.data) return <div>Not logged in</div>;

          const data = await createDoctorProfile();
          console.log(data);

          // if(res.status===201){
          //     alert('Doctor Profile Created')
          // }
        }}
      >
        Create Doctor Profile{" "}
      </button>
    </div>
  );
};

export default ApplyDoctor;
