"use server";

import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

import axios from "axios";

export const changeSession = async () => {
  const session = await getServerSession(authOption);

  if (session)
    // session.user.email = "ram@kiit.ac.in";

    // console.log(session);

    return session;
};

export const updateUser = async (formData: FormData) => {
  // console.log(data);
  try {
    const res = await axios.post(
      `${process.env.SERVER_URL}/user/updateUser`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.status === 201) {
      const data = await res.data;
      return {
        status: 201,
        message: "User Updated",
        data,
      };
    }
    return {
      status: res.status,
      message: res.statusText,
    };
    console.log(res);
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export const createDoctorProfile = async () => {
  const session = await getServerSession(authOption);
  if (!session) {
    console.log("no session");
    return null;
  }
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/user/createDoctorProfile/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.data.id,
        }),
      }
    );

    const data = await res.json();

    revalidateTag("ApplyDoctor");

    return data;
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};

export const updateDoctorProfile = async (data: any) => {
  // console.log(data);
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/doctor/updateDoctorProfile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // console.log(res);
    revalidateTag("ApplyDoctor");
    if (res.status === 201) {
      return {
        status: 201,
        message: "Doctor Profile Updated",
        data: await res.json(),
      };
    }

    return {
      status: res.status,
      message: res.statusText,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export const UpdateProfileImage = async (formData: FormData) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_URL}/doctor/uploadDoctorProfile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 201) {
      return {
        status: 201,
        message: "Profile Image Updated",
        profilePic: response.data,
      };
    }
    return {
      status: response.status,
      message: response.statusText,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export const addReview = async (data: {
  doctorProfileId: string;
  comment: string;
}) => {
  const session = await getServerSession(authOption);
  if (!session || !session.data) return false;
  try {
    const res = await fetch(`${process.env.SERVER_URL}/user/addReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, userId: session?.data.id }),
    });

    if (res.status === 201) {
      return {
        status: 201,
        message: "Review Added",
      };
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const filterDoctor = async (speciality: string, address: string,mode:string) => {
  try {
    const d = await fetch(
      `${process.env.SERVER_URL}/user/findDoctorList?address=${address}&speciality=${speciality}&mode=${mode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache",
      }
    );

    if (d.status !== 200) {
      throw new Error("Internal Server Error!");
    }

    const data = await d.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error!");
  }
};

export const validateRoutes = async (tags: string) => {
  try {
    revalidateTag(tags);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addDocument = async (data: FormData) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER_URL}/doctor/addDocuments`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const removeDocument = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/doctor/removeDocuments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctorId: id }),
      }
    );

    return response.status;
  } catch (error) {
    console.log(error);
    return 500;
  }
};
