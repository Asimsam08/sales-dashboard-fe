import ConsultationImg from "@/assets/images/consul.png.png"
import OrdersImg from "@/assets/images/orders.png.png"
import ConversionImg from "@/assets/images/conver.png.png"
import TotSalesImg from "@/assets/images/salesva.png.png"
import AvgOrderImg from "@/assets/images/orderval.png.png"
import PaidImg from "@/assets/images/compaid.png.png"
import { AvgOrderIcon, ConsultationIcon, ConversionIcon, DecreaseIcon, IncreaseIcon, OrderPlacedIcon, PaidIcon, TotsalesIcon } from "@/design-systems/Atoms/Icons"


  export const CardData = [
    {label: "Consultations", value:"24", output: "15%", icon:ConsultationIcon,status:"increase",statusIcon: IncreaseIcon },
    {label: "Orders Placed", value:"12", output: "15%", icon:OrderPlacedIcon,status:"decrease",statusIcon: DecreaseIcon},
    {label: "Conversion", value:"50", output: "15%", icon:ConversionIcon,status:"decrease",statusIcon: DecreaseIcon},
    {label: "Total sales value", value:"$2400", output: "15%", icon:TotsalesIcon,status:"increase",statusIcon: IncreaseIcon},
    {label: "Avg order value", value:"$240", output: "15%", icon:AvgOrderIcon,status:"increase",statusIcon: IncreaseIcon},
    {label: "Commission Paid",value:"$240", output: "15%", icon:PaidIcon,status:"increase",statusIcon: IncreaseIcon},

  ]