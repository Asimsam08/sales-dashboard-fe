import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  product: {
    name: string;
    image: StaticImageData;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

export interface DynamicTableProps {
  headers: string[]; 
  data: Product[]; 
  itemsPerPage: number; 
}
