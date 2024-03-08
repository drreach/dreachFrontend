// import Header from "@/components/Landing/Header";

// import { Services } from "@/components/Landing/Services/Services";
import MainHome from "@/components/MainHome";
import Dashboard from "@/components/dashboard/Dashboard";
import Login from "@/components/dashboard/Login";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session  =await getServerSession(authOption);
  // if(session && session?.data?.role === "NORMAL"){
  //   return redirect("/user/dashboard");
  // }else if(session && session?.data?.role === "DOCTOR"){
  //   return redirect("/doctor/dashboard");
  // }else if(session && session?.data?.role === "ADMIN"){
  //   return redirect("/admin/dashboard");
  // }
  return (
 
   <>
   <MainHome/>
   </>

  );
}
