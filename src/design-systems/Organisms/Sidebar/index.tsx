"use client"
import React from 'react';
import Image from 'next/image';
import LogoImage from "@/assets/images/demo-logo.png"
import HomeImage from "@/assets/images/House.png"
import UsersImage from "@/assets/images/UsersFour.png"
import SettingImage from "@/assets/images/Gear.png"
import ChatImage from "@/assets/images/ChatTeardrop.png"



const Sidebar = () => {
  return (
    <div className={`flex h-[1080px] !py-6 bg-greenTheme transition-width duration-300 w-16 fixed top-0 left-0 z-10`}>
      <div className="relative h-full w-full">
          <>
               
          

             <div className="flex flex-col justify-between items-center h-screen">
              <div className="flex flex-col justify-center items-center">
            <div className="flex items-center rounded transition-colors duration-200">
            <Image src={LogoImage} height={0} width={0} alt="logo-img" />
              </div>

    <div className='border-[1px] border-solid border-[#134E48] w-[28px] mt-[30px]'></div>

 

              <div className="flex justify-center items-center rounded duration-200 mt-[30px]">
<div className={`!flex !justify-center !items-center w-[36px] h-[36px] bg-light rounded-[8px] shadow-lg`}>
<Image src={HomeImage} height={0} width={0} alt="logo-img" />

</div>
              </div>
              <div className="flex items-center rounded  transition-colors duration-200 mt-[30px] hover:bg-[#288077] p-2 hover:shadow-sm">
                <Image src={ChatImage} height={0} width={0} alt="logo-img" />

        
              </div>
              <div className="flex items-center rounded  transition-colors duration-200 mt-[30px] hover:bg-[#288077] p-2 hover:shadow-sm">
                <Image src={UsersImage} height={0} width={0} alt="logo-img" />

           
              </div>
              </div>
              
<div className="flex flex-col justify-center items-center">
              <div className="flex items-center rounded mb-16 transition-colors duration-200 hover:bg-[#288077] p-2 hover:shadow-sm">
                <Image src={SettingImage} height={0} width={0} alt="logo-img" />

           
              </div>
              </div>


              
            </div>
       
          
          </>
      
      </div>
    </div>
  );
};

export default Sidebar;
