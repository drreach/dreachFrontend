import Footer from "@/components/Footer";
import Logout from "@/components/Logout";
import Sidebar from "@/components/User/dashboard/Sidebar";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { convertDateToFormat } from "@/utils/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession(authOption);
  if(!session || session.data.role !== "NORMAL"){
    return redirect("/");
  }

    return(
        <>
      {/* Main Wrapper */}
      <div className="main-wrapper pt-28   w-full md:px-10 mx-auto overflow-x-hidden">
        {/* Header */}
     
        {/* /Header */}
        {/* Breadcrumb */}
        {/* <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="px-1 ">
          <div className="">
            <div className="row ">
              {/* Profile Sidebar */}
           <Sidebar/>
              {/* / Profile Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="px-1">
                  <div className="card-body pt-0">
                 
                    {/* Tab Content */}
                    

                    {children}

                    <div className="tab-content pt-0">
                     
                    </div>
                    {/* Tab Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
    
   
        {/* /Footer */}
      </div>
    </>
    )
}