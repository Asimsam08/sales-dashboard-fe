export type Option = {
  label: string;
  value: string | number;
};

export interface CustomSelectProps {
  options: Option[];
  onSelect: (value: string | number) => void; 
  defaultValue?: string | number;
  placeholder?: string; 
}
