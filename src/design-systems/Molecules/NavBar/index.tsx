"use client"
import Link from "next/link";
import { navItems } from "./utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";



const Navbar = ()=>{
    const [isNav, setIsNav] = useState<string>("Summary");


    
    
    return (
<>
<div className="border-b border-[#DCDFE4] fixed z-[999999] top-0 left-0 right-0 bg-white ml-16">
<nav className="flex items-start py-6 px-[40px]">
      <ul className="flex items-start gap-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href= {`${item.href}`}
            className={`${isNav == item.label ? "bg-[#CCFBEF] rounded-[24px] p-3 text-[#212636] shadow-sm" : "!text-[#8A94A6]"} flex w-[137px] items-center justify-center h-[46px] gap-3
`}
            onClick={()=>setIsNav(item.label)}
           >

           
                {/* <Image src={item.icon} alt="nav-icons" height={0} width={0} className="text-blue" style={{color: "blue"}} /> */}
    
        <item.icon fill={isNav == item.label ? "#212636" : "#8A94A6" } />
               <div className="text-lg font-medium">{item.label}</div> 
              
            </Link>
          </li>
        ))}
      </ul>
    </nav></div>
</>
    )
}

  export default Navbar;