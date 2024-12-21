"use client";
import CustomSelect from "@/design-systems/Atoms/SelectDropdown";
import AnalyticsCard from "@/design-systems/Molecules/AnalyticsCard";
import { CardData } from "@/design-systems/Molecules/AnalyticsCard/utils";
import { selectOptions } from "./utils";
import DynamicTable from "@/design-systems/Molecules/Table";
import { productData } from "@/utils.ts/data";
import { ConsultationIcon, IncreaseIcon } from "@/design-systems/Atoms/Icons";
import InsightsChart from "@/design-systems/Organisms/Charts/InsightsChart";
import PastPeriodChart from "@/design-systems/Organisms/Charts/PastPeriodChart";
const headers = ["Product", "Date", "Time Spent", "Order Value", "Commission"];

const SummaryTemplate = () => {
  const handleSelect = (value: string | number) => {
    console.log("Selected value:", value);
  };

  return (
    <>
      <div className="py-[36px] px-[40px] mt-[94px] w-full">
        <div className="bg-white border-[0.5px] rounded-[20px] border border-[#DCDFE4] px-6 py-6">
          <div className="flex justify-between">
            <div className="text-[32px] font-medium">At a glance</div>

            <CustomSelect
              options={selectOptions}
              onSelect={handleSelect}
              defaultValue={selectOptions[0].label}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-11">
            {CardData.length > 0 &&
              CardData.map((item, index) => {
                return <AnalyticsCard data={item} key={index} />;
              })}
          </div>

          <div className="text-[32px] font-medium mt-[58px] mb-10">
            Insights
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[640px,250px,250px] gap-4">
        
<div className="w-full"><InsightsChart /></div>
            
            <div className="w-full">  <PastPeriodChart /></div>
          
            <div className="w-full h-[455px] bg-[#15B79F] px-6 rounded-[20px] pb-[63px] pt-[30px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <ConsultationIcon fill="#CCFBEF" />
                  <div className="text-xs text-[#CCFBEF]">Forecasts</div>
                </div>

                <div className="text-[#FFFFFF] text-[56px] font-medium flex gap-5 items-start mt-6">
                  <div>+15%</div>
                  <div className="mt-3">
                    {" "}
                    <IncreaseIcon fill="white" width="35" height="35" />
                  </div>
                </div>

                <p className="text-[#FFFFFF] text-sm font-normal">
                  forecasted increase in your sales closed by the end of the
                  current month
                </p>

                <div className="text-[#FFFFFF] text-[56px] font-medium flex gap-5 items-start mt-6">
                  <div className="">+20%</div>
                  <div className="mt-3">
                    {" "}
                    <IncreaseIcon fill="white" width="35" height="35" />
                  </div>
                </div>

                <p className="text-[#FFFFFF] text-sm font-normal">
                  forecasted increase in your sales closed by the end of the
                  current month
                </p>
              </div>
            </div>


          </div>

          <div className="text-[32px] font-medium mt-[58px] mb-10">Orders</div>

          <DynamicTable headers={headers} data={productData} itemsPerPage={4} />
        </div>
      </div>
    </>
  );
};

export default SummaryTemplate;
