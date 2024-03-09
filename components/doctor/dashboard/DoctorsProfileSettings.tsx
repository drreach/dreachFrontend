import DoctorDashboard from "./DoctorDashboard";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { redirect } from "next/navigation";

const DoctorsProfileSettings = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session.user) {
    return redirect("/");
  }

  const res = await fetch(
    `${process.env.SERVER_URL}/doctor/getDoctor/${session.data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["ApplyDoctor"],
      },
    }
  );

  if (res.status !== 200) {
    return <p>Something went wrong!</p>;
  }

  const data = await res.json();

  return <DoctorDashboard datas={data} />;
};

export default DoctorsProfileSettings;
