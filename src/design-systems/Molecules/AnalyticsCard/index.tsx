import { IncreaseIcon } from "@/design-systems/Atoms/Icons";
import { AnalyticCardType } from "./interface";
import Image from "next/image";

const AnalyticsCard:React.FC<AnalyticCardType> = ({data}) => {
  return (
    <div className="p-6 bg-[#ffffff] rounded-[20px] drop-shadow-card border-[0.5px] border-[#DCDFE4] text-black">
      <div className="flex flex-col">
        
          <div className="flex gap-2 items-center">
          <data.icon />
           <div className="text-xs font-semibold text-[#667085]"> {data.label.toUpperCase()}</div>
          </div>
    
        <div className="text-[32px] font-medium mt-3">{data.value}</div>

        <div className="flex items-center gap-2 mt-2">
            <data.statusIcon />
          {/* <div className="text-[#667085]">{data.output}</div> */}
          {data.status === "increase"?   <div className="text-sm"><span className="text-[#15B79F]">{data.output}</span>{" "}increase</div>:  <div className="text-[#667085]"><span className="text-[#F04438]">{data.output}</span>{" "}decrease</div> }
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
