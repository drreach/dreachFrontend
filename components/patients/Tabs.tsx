"use client";
import { useAppSelector } from "@/Redux/hooks/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Tabs = ({ patientsId }: { patientsId: string }) => {
  const router = usePathname();

  const activeTab = useAppSelector;
  return (
    <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
      <li className="nav-item">
        <Link
          className={`nav-link ${!router.includes("prescription") && "active"}`}
          href={`/patients/${patientsId}`}
          data-toggle="tab"
        >
          <span className="med-records">Medical Records</span>
        </Link>
      </li>
      {/* 
      <li className="nav-item">
        <Link
          className="nav-link"
          href={`/patients/${patientsId}/prescription`}
          data-toggle="tab"
        >
          <span>Prescription</span>
        </Link>
      </li> */}
    </ul>
  );
};

export default Tabs;
