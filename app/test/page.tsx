"use client"
import TimeSlotSelector from "@/components/Shed";
import React, { useState } from "react";

function Page() {
  const [values, setValues] = useState<string[]>([]);
 

  return (
    <div className="pt-28">
      <TimeSlotSelector/>
     </div>
  );
}

export default Page;
