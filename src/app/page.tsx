"use client"
import Dashboard from "@/design-systems/Templates/Dashboard";
import LogoImage from '@/assets/images/demo-logo.png'
import Image from "next/image";
import SummaryTemplate from "@/design-systems/Templates/SummaryTemplate";

export default function Home() {
  return (
<>
    <div className="flex w-full">
     {/* <Dashboard /> */}

     <SummaryTemplate />

     </div>
          </>
  );
}
