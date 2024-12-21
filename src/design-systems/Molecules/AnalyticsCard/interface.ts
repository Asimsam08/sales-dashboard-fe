import { StaticImageData } from "next/image"

export interface AnalyticCardType {
data : CardDataType
}



export interface CardDataType  {
    label: string
     value:string
      output: string
        icon:React.ElementType
        status: string
        statusIcon:React.ElementType

}