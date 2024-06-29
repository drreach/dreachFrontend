"use server";

import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const actionsOnUser = async (action: string, id: string) => {
  const session = await getServerSession(authOption);
  //   if (!session || session.data.role !== "ADMIN") {
  //     console.log("no session");
  //     return null;
  //   }

  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/admin/actionOnDoctor?action=${action}&userId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (res.status === 200) {
      const data = await res.json();
      revalidateTag("doctor_verify");
      return {
        status: 200,
        data: data,
        message: "Action Permoformed Successfully",
      };
    }

    return {
      status: res.status,
      message: "Something went wrong",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error!",
    };
  }
};
